const User = require('../models/User');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { userName, userPassword } = req.body;
    if (!userName || !userPassword)
        return res.status(400).json({ "message": "Enter username and password" });

    try {
        // Check for duplicate username
        const duplicate = await User.findOne({ userName: userName });
        if (duplicate) return res.status(409).json({ "message": "User has already been registered" });

        // Hash the password
        const hashedPassword = await bcrypt.hash(userPassword, 10);

        // Create and store the new user
        const result = await User.create({
            "userName": userName,
            "userPassword": hashedPassword
        });

        console.log(result);
        res.status(201).json({ "success": `New user ${userName} created` });
    } catch (error) {
        res.status(500).json({ "message": `Error: ${error.message}` });
    }
}

module.exports = { handleNewUser };