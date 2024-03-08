const OrderServices = require('../services/orders.services');



exports.newOrderRequest = async(request,response)=>{


    const orderData = request.body;
    try {
        if (!orderData) {
            
            return response.status(400).json({
                status: false,
                message: "Invalid userId",
              });
        }else{

            const newOrderRequest = await OrderServices.newOrder(orderData);

            if (newOrderRequest) {
                return response.status(201).json({
                    status: true,
                    message: "Order successful"
                  });
            }else{
                throw "Failed to get orders"
            }
        }
    } catch (error) {
        console.log(error.message)
       return response.status(404).json(
            {
                status : false,
                data : error.message
            }
        )
        
    }
}        


exports.getMyOrders = async(request,response)=>{

    const {userId} = request.body;


    try {
        if (!userId) {
            return response.status(400).json({
                status: false,
                message: "Invalid userId",
              });
        }else{
            const myOrdersData = await OrderServices.findUserOrders(userId);

            if (myOrdersData) {
                return response.status(201).json({
                    status: true,
                    data: myOrdersData
                  });
            }else{
                throw "Failed to get orders"
            }
        }
    } catch (error) {
       return response.status(404).json(
            {
                status : false,
                data : error.message
            }
        )
        
    }
}        

exports.cancelOrder = async (request,response)=>{

    const {userId,orderId} = request.body;

    try {
        if (!(userId && orderId)) {
            return response.status(400).json({
                status: false,
                message: "Invalid userId or orderId",
              });
        }else{
            const cancellationResult = await OrderServices.cancelUserOrder(orderId,userId);
            if (cancellationResult) {
                return response.status(201).json({
                    status: true,
                    message: "order has been cancelled!"
                  });
            }else{
                throw "Failed to get orders"
            }
        }
    } catch (error) {
        return response.status(404).json(
            {
                status : false,
                message : error.message
            }
        )
    }
}

exports.updateDeliveryStatus = async (request,response)=>{

    const {userId,docId,status} = request.body;
    try {
        if (!(userId && docId && status)) {
            return response.status(400).json({
                status: false,
                message: "Invalid data",
              });
        }else{
            const updatingResult = await OrderServices.updateOrderDeliveryStatus(userId,docId,status);
            if (updatingResult) {
                return response.status(201).json({
                    status: true,
                    data: "order has been updated!"
                  });
            }else{
                throw "Failed to get orders"
            }
        }
    } catch (error) {
        return response.status(404).json(
            {
                status : false,
                data : error.message
            }
        )
    }
}