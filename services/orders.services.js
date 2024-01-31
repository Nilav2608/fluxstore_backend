const Orders = require('../models/orders.model');



class OrderServices{

   
    static async newOrder(data){

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
        if (results.length > 0) {
            return results
        }else{
            return false
        }
    }

}

module.exports = OrderServices;