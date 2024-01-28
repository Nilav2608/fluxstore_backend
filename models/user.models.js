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
    // address:{
    //   type: addressSchema,
    //   required: false},

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



 //   type: {
    //     street: {
    //         type: String,
    //         required: true
    //     },
    //     city: {
    //         type: String,
    //         required: true
    //     },
    //     state: {
    //         type: String,
    //         required: true
    //     },
    //     postalCode: {
    //         type: String,
    //         required: true
    //     },
    //     country: {
    //         type: String,
    //         required: true
    //     },
    //     phoneNumber: {
    //         type: String,
    //         required: true
    //     },
    // },