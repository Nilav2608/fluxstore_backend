const mongoose = require('mongoose');
const {cartItemsSchema} = require('./cart.model');
const { Timestamp } = require('mongodb');
const { Schema } = mongoose;


const ordersSchema = new Schema({
    userId: { type: String, required:true },
    orderID: { type: String, required:true },
    trackingNumber: { type: String, required:true },
    date: { type: String,required:true },
    deliveryAddress: {
      street: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      postalCode: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      },
      phoneNumber: {
        type: String,
        required: true
      }},
    quantity: { type: Number, required:true },
    orderedItems: { type: [cartItemsSchema], required:true },
    subTotal: { type: Number,required:true },
    shippingCharges: { type: Number, required:true },
    total: { type: Number, required:true },
    paymentMethod: { type: String, required:true },
    deliveryStatus: { type: String,}
},{timestamps : true});

const Orders = mongoose.model('Orders', ordersSchema);

module.exports = Orders;