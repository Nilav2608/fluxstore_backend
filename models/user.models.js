const mongoose = require('mongoose');
const connection = require('../configs/mongoDBconfigs');
const  {Schema } = mongoose;



const userSchema = new Schema({
    userName : {
        type: String,
        require : true
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartItems: [
       {
         productId: { type: Number, required: true },
         productName: { type: String, required: true },
         price:{type: Number,required : true},
         size: { type: String,required : true },
         color: { type: String,required : true },
         imageURL: { type: String,required : true },
         quantity: { type: Number, required: true },
         selected:{type:Boolean,required : true}
      },
  ],
})