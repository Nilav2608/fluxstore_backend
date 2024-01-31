const {request,response} = require('../app');
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
            console.log(userId);
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

    const {userId,docId} = request.body;

    try {
        if (!(userId && docId)) {
            return response.status(400).json({
                status: false,
                message: "Invalid userId or docId",
              });
        }else{
            const cancellationResult = await OrderServices.cancelUserOrder(docId,userId);
            if (cancellationResult) {
                return response.status(201).json({
                    status: true,
                    data: "order has been cancelled!"
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