const jwt = require('jsonwebtoken')
const InvalidToken = require('../models/invalidTokens')

const verifyJwtToken = async (req,res,next) => {
    const authHeader = req.headers['authorization']

    if(!authHeader){return res.status(401).json({"message":"Unauthorized entry"})}
    console.log(authHeader)

    const token = authHeader.split(' ')[1];

    const invalidToken = await InvalidToken.findOne({ token });

    if(invalidToken){
        return res.status(400).json({message:"the token is alrady invalidated"})
    }

    jwt.verify(
        token,
        'MYJWTTOKEN',
        (err, decoded) =>{
            if (err) return res.status(403).json({"message":"UNAUTHORIZED ENTRY"})
            req.user = decoded.userName
            next();
        }
    )
}

module.exports =   verifyJwtToken 