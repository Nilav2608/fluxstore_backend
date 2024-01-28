const mongoose = require('mongoose');
const database = require('../configs/mongoDBconfigs');
const bcrypt = require('bcrypt');
const  {Schema } = mongoose;



const userSchema = new Schema({
    userName : {
        type: String,
        require : true
    },
    email: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
    address:{
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      postalCode: {
        type: String,
      },
      country: {
        type: String,
      },
      phoneNumber: {
        type: String,
      },
    },
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

userSchema.pre("save", async function () {
    try {
       var user = this;

       if(!user.isModified('hashedPassword')){
          return next("Password is modified");
       }
       var salt = await bcrypt.genSalt(10);
       var hashedPassword = await bcrypt.hash(user.hashedPassword,salt);
       user.hashedPassword = hashedPassword;
       return next("password is modified");

    } catch (error) {
      return next("error"); //
    }
})

function next(data) {
  console.log(data); 
}


const UserModel = mongoose.model('users',userSchema,);

module.exports = UserModel;