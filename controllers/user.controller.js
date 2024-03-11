const { request } = require("express");
const UserServices = require("../services/user.services");
const dotenv = require('dotenv');
dotenv.config();

exports.register = async(request,response,next)=>{

    try {
        const {userName,email,password} = request.body;

    if (!(userName && email && password)) {
        response.status(400).json({
            status : true,
            success:"email or password is empty"
        })
    }
    const successState = await UserServices.registerUser(userName,email,password);
    if (successState) {
        response.status(201).json(
            {
                status : true,
                message:"Registeration Successful!"
            }
        )
    }else{
        response.status(400).json({
            status:false,
            message: "user already exists"
        })
    }
    } catch (error) {
        response.status(400).json(
            {
                status:false,
                message: error.message
            }
        )
    }
}

exports.login = async (request,response)=>{
    const {email,password} = request.body;

    try {
        if(!(email && password)){
            return response.status(400).json({
                status:false,
                message: "Email or password is empty!"
            });
        }

        const user = await UserServices.checkUser(email);
        if(!user){
            return response.status(401).json({
                status:false,
                message: "User does not exist"
            });
        }

        const loginSuccessState = await UserServices.loginUser(email,password);

        if (loginSuccessState) {
            const tokenData = {
                _id: user._id,
                email: user.email
            };
            const secretKey = process.env.SECRET_KEY;
            const generatedToken = await UserServices.generateToken(tokenData,secretKey,'14d');
            return response.status(201).json({
                status:true,
                token: generatedToken,
                message: "Logged in successfully"
            });
        } else {
            return response.status(401).json({
                status:false,
                message: "Invalid email or password"
            });
        }
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            status:false,
            message:"An error occurred during Login"
        });
    }
}


exports.getUser =  async (request,response) =>{
    const {userId} = request.body;

    try {
        if(userId){
            const results = await UserServices.getUserDetails(userId);
            response.status(201).json({
                status:true,
                data: results
            })
        }else{
            response.status(400).json(
                {
                    status:false,
                    message: "Email or password is empty!"
                }
            )
        }

    } catch (error) {
        response.status(400).json(
            {
                status:false,
                message: error.message
            }
        )
    }
}