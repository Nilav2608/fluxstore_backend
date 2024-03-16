const { generateOrderID, generateTrackingId } = require('../helpers/helpers');
const Orders = require('../models/orders.model');



class OrderServices{

   
    static async newOrder(data){
        data.orderID = generateOrderID();
        data.trackingNumber = generateTrackingId("IK",9);
        const order = await Orders(data);
        const results = await order.save(); 
        if (results) {
            return true
        }else{
            return false
        }
    }

    // find orders based on userId such as email!
    static async findUserOrders(userId){

        const results = await Orders.find({userId: userId})
        console.log(results)
        if (results.length >= 0) {
            return results
        }else{
            return false
        }
    }


    static async cancelUserOrder(orderId,userId){
        //find orders based on userID
        const orderExists = await Orders.find({userId: userId});
        //if the orders exists
        if (orderExists) {
            //then check the order based on order Id
            const order = await Orders.updateOne(
                {orderID : orderId},
                {
                    $set:{deliveryStatus:"CANCELLED"}
                }
            );
            if (order) {
                return true;
            } else {
                return false;
            }
        }else{
            return false;
        }
    }

    static async updateOrderDeliveryStatus(userId,docId,status){
        //find orders based on userID
        const orderExists = await Orders.findOne({ userId: userId, _id: docId });
        //if the orders exists
        if (orderExists) {
            //then check the order based on orders object Id
            const statusUpdated = await Orders.findByIdAndUpdate(docId, { deliveryStatus: status });
            if (statusUpdated) {
                return true;
            } else {
                return false;
            }
        }else{
            return false;
        }
    }
}

module.exports = OrderServices;