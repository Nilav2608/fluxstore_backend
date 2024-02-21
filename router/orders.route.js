const router = require('express').Router();
const ordersController = require('../controllers/orders.controller');


router.post('/api/v1/users/getUserOrders',ordersController.getMyOrders);
router.post('/api/v1/users/newOrder',ordersController.newOrderRequest);
router.put('/api/v1/users/cancelOrder',ordersController.cancelOrder);
router.post('/api/v1/admin/updateDeliveryStatus',ordersController.updateDeliveryStatus);


module.exports = router;