const express = require("express");
const userRouter = require("./router/user.route");
const productsRouter = require('./router/products.route');
const cartRouter = require('./router/cart.route');
const ordersRouter = require('./router/orders.route');
const bannersRouter = require('./router/banner.route');
const recommendationsRouter = require("./router/recomendations.route");
const searchRouter = require("./router/search.route");
const body_Parser = require('body-parser');
const app = express();

app.use(body_Parser.json())
app.use('/',userRouter)
app.use('/',productsRouter)
app.use('/',cartRouter)
app.use('/',ordersRouter)
app.use('/',bannersRouter)
app.use('/',recommendationsRouter)
app.use('/',searchRouter)

module.exports = app;