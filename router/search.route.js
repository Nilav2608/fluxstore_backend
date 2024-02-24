const router = require('express').Router();
const searchController = require('../controllers/search.controller')

router.get('/api/v1/products/:productName',searchController.searchByProductName);


module.exports = router;