const express = require("express");
const userRouter = require("./router/user.route");
const productsRouter = require('./router/products.route');
const body_Parser = require('body-parser');
const app = express();

app.use(body_Parser.json())
app.use('/',userRouter)
app.use('/',productsRouter)

module.exports = app;