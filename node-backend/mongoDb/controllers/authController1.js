const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
    const { userName, userPassword } = req.body;
    if (!userName || !userPassword)
        return res.status(400).json({ "message": "Username and password are required" });

    try {
        // Find the user in the database
        const userFound = await User.findOne({ userName: userName }).exec();
        if (!userFound) {
            return res.status(401).json({ "message": "User not found" });
        }

        // Evaluate password
        const match = await bcrypt.compare(userPassword, userFound.userPassword);
        if (match) {
            // JWT creation
            const accessToken = jwt.sign(
                { "username": userFound.userName },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '15m' }
            );
            const refreshToken = jwt.sign(
                { "username": userFound.userName },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: '7d' }
            );

            // Saving refreshToken with current user
            userFound.refreshToken = refreshToken;
            const result = await userFound.save();
            console.log(result);

            // Send refreshToken as HTTP-only cookie
            res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });

            return res.json({ accessToken });
        } else {
            return res.status(401).json({ "message": "Incorrect password" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ "message": "Internal server error" });
    }
}

module.exports = { handleLogin };