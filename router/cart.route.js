const router = require('express').Router();
const cartController = require('../controllers/cart.controller');


router.post('/api/v1/users/AddToCart',cartController.addToCart)
router.post('/api/v1/users/getuserCart',cartController.getUserCartItems)
router.delete('/api/v1/users/deleteCartItem',cartController.deleteFromCart)

module.exports = router;