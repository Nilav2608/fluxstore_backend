const router = require('express').Router();
const ordersController = require('../controllers/orders.controller');


router.get('/getMyOrders',ordersController.getMyOrders);
router.post('/newOrder',ordersController.newOrderRequest);
router.post('/cancelOrder',ordersController.cancelOrder);


module.exports = router;