const mongoose = require('mongoose');
const { token } = require('morgan');

const Schema = mongoose.Schema

const invalidTokenSchema = Schema(
    {token:{
        type:String,
        required:true,
        ref:'User'
    } },
    { Timestamp:true}
)

module.exports = mongoose.model('invalidTokens', invalidTokenSchema)
