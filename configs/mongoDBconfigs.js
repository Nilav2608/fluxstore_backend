const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

const connectionString = process.env.CONNECTION_STRING;


const connection = mongoose.connect(connectionString).then(()=>{
    console.log("Database Connection successful")
}).catch((e)=>{
    console.log(e);
})

module.exports = connection;