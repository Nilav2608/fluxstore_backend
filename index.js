const app = require("./app");
const connection = require("./configs/mongoDBconfigs");

const PORT = 3000;


app.listen(PORT,'0.0.0.0',()=>{
    console.log("app listening on port ${PORT}")
})

app.get("/",(req,res)=>{
    res.send("App is running successful");
})