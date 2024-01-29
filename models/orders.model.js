const mongoose = require('mongoose');
const { Schema } = mongoose;



const ordersSchema = new Schema({
    userId: { type: String, required:true },
    orderID: { type: String, required:true },
    trackingNumber: { type: String, required:true },
    date: { type: String,required:true },
    deliveryAddress: { type: deliveryAddressSchema, required:true },
    quantity: { type: Number, required:true },
    orderedItems: { type: Array, required:true },
    subTotal: { type: Number,required:true },
    shippingCharges: { type: Number, required:true },
    total: { type: Number, required:true },
    paymentMethod: { type: String, required:true },
    deliveryStatus: { type: String,}
});

const Orders = mongoose.model('Orders', ordersSchema);

module.exports = Orders;