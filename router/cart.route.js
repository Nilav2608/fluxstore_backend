const router = require('express').Router();
const cartController = require('../controllers/cart.controller');


router.post('/AddToCart',cartController.addToCart)
router.delete('/deleteCartItem',cartController.deleteFromCart)

module.exports = router;