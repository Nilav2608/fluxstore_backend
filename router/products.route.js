const router = require('express').Router();
const productsController = require('../controllers/products.controller')


router.get('/products',productsController.getProducts);

module.exports = router;