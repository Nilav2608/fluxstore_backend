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

    static async loginUser(email,password){

        try {
            if (!(email && password)) {
                return false;
            }
            const isUserExists = await UserModel.findOne({ email })
            console.log(isUserExists)
            if (isUserExists) {
                const validPassword = await bcrypt.compare(password,isUserExists.password);
                if (validPassword) {
                    return true;
                }else{
                    return false;
                }
            }else{
                return false
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    static async generateToken(tokenData,secretKey,expire){
        return jwt.sign(tokenData,secretKey,{expiresIn:expire});
    }

    static async checkUser(email){
        try {
            return UserModel.findOne({email})
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = UserServices;
