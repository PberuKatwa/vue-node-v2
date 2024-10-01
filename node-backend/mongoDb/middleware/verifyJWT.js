const jwt = require('jsonwebtoken')


const verifyJwtToken = (req,res,next) => {
    const authHeader = req.headers['authorization']

    if(!authHeader){return res.status(401).json({"message":"Unauthorized entry"})}
    console.log(authHeader)

    const token = authHeader.split(' ')[1];

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