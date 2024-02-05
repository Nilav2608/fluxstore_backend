const router = require('express').Router();
const ordersController = require('../controllers/orders.controller');


router.get('/getMyOrders',ordersController.getMyOrders);
router.post('/newOrder',ordersController.newOrderRequest);
router.post('/cancelOrder',ordersController.cancelOrder);
router.post('/admin/updateDeliveryStatus',ordersController.updateDeliveryStatus);


module.exports = router;