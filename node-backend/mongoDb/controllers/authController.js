const bcrypt = require('bcrypt');
const User = require('../models/User');

const Jwt = require('jsonwebtoken')

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
            // JWT creation would go here

            const accessToken = Jwt.sign(
                {"username":userFound.userName},
                'MYJWTTOKEN',
                {expiresIn:'120m'}
            )


            // return res.json({ "success": `${userName} logged in successfully` });
            return res.status(201).json(accessToken)
        } else {
            return res.status(401).json({ "message": "Incorrect password" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ "message": "Internal server error" });
    }
}

module.exports = { handleLogin };