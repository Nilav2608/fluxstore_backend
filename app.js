const express = require("express");
const userRouter = require("./router/user.route");
const productsRouter = require('./router/products.route');
const cartRouter = require('./router/cart.route');
const body_Parser = require('body-parser');
const app = express();

app.use(body_Parser.json())
app.use('/',userRouter)
app.use('/',productsRouter)
app.use('/',cartRouter)

module.exports = app;