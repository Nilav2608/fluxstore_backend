const mongoose = require('mongoose');
const { Schema } = mongoose;


const cartItemsSchema = new Schema({
    userId: { type: String, required: true },
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    imageUrl: { type: String, required: true },
    quantity: { type: Number, required: true },
    selected: { type: Boolean, required: true }
});


const Cart = mongoose.model("carts",cartItemsSchema);

module.exports = { Cart, cartItemsSchema };
