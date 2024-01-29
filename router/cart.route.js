const router = require('express').Router();
const cartController = require('../controllers/cart.controller');


router.post('/AddToCart',cartController.addToCart)

module.exports = router;