const mongoose = require('mongoose');
const { Schema } = mongoose;



const ordersSchema = new Schema({
    orderID: { type: String },
    trackingNumber: { type: String },
    date: { type: String },
    deliveryAddress: { type: deliveryAddressSchema },
    quantity: { type: Number },
    orderedItems: { type: [cartItemsSchema] },
    subTotal: { type: Number },
    shippingCharges: { type: Number },
    total: { type: Number },
    paymentMethod: { type: String },
    deliveryStatus: { type: String }
});

const Orders = mongoose.model('Orders', ordersSchema);

module.exports = Orders;