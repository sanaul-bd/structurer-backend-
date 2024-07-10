
require('dotenv').config();
const { default: mongoose } = require("mongoose");


// id pass
const userName = process.env.USER_NAME;
const userPass = process.env.USER_PASS;
console.log(userName, userPass)
// MongoDB Connection
const mongodbUrl = `mongodb+srv://${userName}:${userPass}@cluster0.omif32i.mongodb.net/?appName=Cluster0`;

async function connectDB(){
    return mongoose.connect(mongodbUrl)
};

module.exports = connectDB;