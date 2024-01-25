const UserServices = require("../services/user.services");
const {request,response} = require('../app');
const dotenv = require('dotenv');
dotenv.config();

exports.register = async(request,response,next)=>{

    try {
        const {userName,email,password} = request.body;

    if (!(userName && email && password)) {
        response.status(400).json({
            success:"email or password is empty"
        })
    }
    const successState = await UserServices.registerUser(userName,email,password);
    if (successState) {
        response.status(201).json(
            {
                status : true,
                message:"User registered successfully"
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

exports.login = async (request,response,next)=>{
     const {email,password} = request.body;

     try {
        if(!(email && password)){
            response.status(400).json(
                {
                    status:false,
                    message: "Email or password is empty!"
                }
            )
        }
        const user = await UserServices.checkUser(email);
        if(!user){
            response.status(401).json(
                {
                    status:false,
                    message: "User does not exists"
                }
            )
        }
        const loginSuccessState = await UserServices.loginUser(email,password);

        if (loginSuccessState) {
            const tokenData = {
                _id: user._id,
                email: user.email
            }
            const secretKey = process.env.SECRET_KEY;
            const expiry = process.env.EXPIRY;
            const generatedToken = await UserServices.generateToken(tokenData,secretKey,expiry);
            response.status(201).json({
                status:true,
                token: generatedToken,
                message: "Logged in successfully"
            })
        }else if(loginSuccessState === false){
            response.status(401).json({status:false,message:"Invalid email or password"})
            console.log("Invalid email or password");
        }else{
            return response.status(500).json({status:false,message:"An error occurrd during Login"})
        }
     } catch (error) {
        console.log(error);
     }
}