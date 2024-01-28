const router = require('express').Router();
const productsController = require('../controllers/products.controller')


router.get('/products',productsController.getProducts);
router.post('/addProducts',productsController.addProducts);

module.exports = router;