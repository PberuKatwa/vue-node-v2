const jwt = require('jsonwebtoken');
const InvalidToken = require('../models/invalidTokens');  // Import your invalidTokens model

const JWT_SECRET = 'your_jwt_secret_key';  // Ensure this is defined

// Assuming isTokenInvalid is an asynchronous function that checks for invalid tokens
const isTokenInvalid = async (token) => {
  const invalidToken = await InvalidToken.findOne({ token });
  return !!invalidToken;  // Returns true if token exists, meaning it's invalid
};

const logout = async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];  // Split by space

  if (!token) {
    return res.status(400).json({ message: 'No token provided' });
  }

  try {
    // Verify the token first to ensure it's valid before invalidating it
    const decoded = jwt.verify(token, "MYJWTTOKEN");

    // Check if the token is already invalidated
    const alreadyInvalid = await isTokenInvalid(token);
    if (alreadyInvalid) {
      return res.status(400).json({ message: 'Token is already invalidated' });
    }

    // Save the token in the invalidTokens collection
    await InvalidToken.create({ token });

    // Send success response
    res.status(200).json({ message: 'Successfully logged out' });

  } catch (error) {
    console.error("this is your error",error);  // For debugging purposes
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { logout };

/*
{"_id":{"$oid":"66fcb92230df79ed1173fc52"},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImthcmFuamEiLCJpYXQiOjE3Mjc4MzgwMDYsImV4cCI6MTcyNzgzOTIwNn0.Z67UM8zGACCDSEZuWQSZfLEdawChpAMaoYJCKGLhFAY","__v":{"$numberInt":"0"}}
{"_id":{"$oid":"66fcb59c30df79ed1173fc47"},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImthcmFuamEiLCJpYXQiOjE3Mjc4Mzc0MjIsImV4cCI6MTcyNzgzODYyMn0.jMP3OZT2n1dRIcK__1IklBlJu2bELdSlLkfS2LSQ-Ws","__v":{"$numberInt":"0"}}

*/