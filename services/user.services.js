const UserModel = require('../models/user.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class UserServices{

    static async registerUser(userName,email,password){
        try {
            const existingUser = await UserModel.findOne({ email });
            if (existingUser) {
                console.log("Email is not unique");
                return false;
            }else{
                const createUser = new UserModel({userName,email,password});
                await createUser.save();
                console.log("Email is unique");
                return true
            }
        } catch (error) {
            console.log(error)
            return false
        }
    }
}


module.exports = UserServices;
