const app = require("./app");
const databaseConfig = require("./configs/mongoDBconfigs");
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3001;


app.listen(PORT,'0.0.0.0',()=>{
    console.log("app is running successfully")
})
