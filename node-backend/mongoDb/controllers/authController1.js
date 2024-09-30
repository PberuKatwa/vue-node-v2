const bcrypt = require('bcrypt')
const usersDb = {
    users: require('../models/user.json'),
    setUsers:function(data){this.users= data}
}

const handleLogin = async (req,res) =>{
    const{ userName, userPassword} = req.body;
    if(!userName || !userPassword) 
        return res.status(201).json({"message":"no valid username or password"})

    const userFound = usersDb.users.find(person => person.username === userName)

    if(!userFound) {return res.status(401).json({"message":"user not found"})}
    // password evaluation
    const match = await bcrypt.compare(userPassword, userFound.userpassword)

    if(match)
        { //JWT CREATION
            return res.json({"success":`${userName} logged in successfully`})}
    else{ return res.sendStatus(401)}
}

module.exports = { handleLogin } 