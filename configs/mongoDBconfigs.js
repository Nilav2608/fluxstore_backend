const mongoose = require('mongoose')


const connectionString = "mongodb+srv://fluxstoreDB:zADkiIxwLZpWo1cd@cluster0.dxzadmr.mongodb.net/?retryWrites=true&w=majority";


const connection = mongoose.connect(connectionString).then(()=>{
    console.log("Database Conncetion successful")
}).catch((e)=>{
    console.log(e);
})

module.exports = connection;