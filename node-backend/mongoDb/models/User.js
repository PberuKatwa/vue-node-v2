const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    userPassword:{
        type:String,
        required:true,
        unique:true
    },
    refreshToken:{
        type:String
    }
})

module.exports = mongoose.model('User', userSchema)