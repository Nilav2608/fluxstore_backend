const express = require("express");
const userRouter = require("./router/user.route");
const body_Parser = require('body-parser');
const app = express();

app.use(body_Parser.json())
app.use('/',userRouter)

module.exports = app;