const mongoose = require('mongoose');

const uri2 = 'mongodb+srv://958innovations:<db_password>@cluster0.c5gil.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const uri =  "mongodb+srv://958innovations:aZVhA4aFOkxSQARN@cluster0.c5gil.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const dbConnect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};

module.exports = dbConnect;
