const UserServices = require("../services/user.services");
const {request,response} = require('../app');


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