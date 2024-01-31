const router = require('express').Router();
const ordersController = require('../controllers/orders.controller');


router.get('/getMyOrders',ordersController.getMyOrders);
router.post('/newOrder',ordersController.newOrderRequest);


module.exports = router;