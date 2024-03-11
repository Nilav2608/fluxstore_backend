const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

const connectionString = process.env.CONNECTION_STRING;


const connection = mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.dxzadmr.mongodb.net/Fluxstore?retryWrites=true&w=majority`).then(()=>{
    console.log("Database Connection successful")
}).catch((e)=>{
    console.log(e);
})

module.exports = connection;