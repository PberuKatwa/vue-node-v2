const usersDB = {
    users:require('../models/user.json') || [],
    setUsers:function(data){this.users = data} 
}

const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt')

const handleNewUser = async (req,res) =>{
    const{ userName,userPassword } = req.body;
    if(!userName || !userPassword)
        return res.status(400).json({"message":"enter username or password"})

    const duplicate = usersDB.users.find(person => person.username === userName);
    if (duplicate) return res.status(409).json({"message":"user has already been registered"});
    try{
        //password hashing
        const hashedPassword = await bcrypt.hash(userPassword, 10);
        //store the new user
        const newUser = {"username":userName,"userpassword":hashedPassword}
        
        usersDB.setUsers([...usersDB.users,newUser ])
        await fsPromises.writeFile(
            path.join(__dirname,'..', 'models', 'user.json'), 
            JSON.stringify(usersDB.users)
        )

        console.log(usersDB.users);
        res.status(201).json({"success":`New user ${userName} created`})

    }catch(error){
        res.status(500).json({"message":`this is the errors = ${error}`})
    }
    
}

module.exports = { handleNewUser }