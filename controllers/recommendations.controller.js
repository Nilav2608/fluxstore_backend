const { request, response } = require("../app");
const RecommendationServices = require("../services/recommendations.services");




exports.recommendationsPostRequest = async(request,response) => {
    const product = request.body;
    console.log(product)
    try {
        if (!product) {
            console.log("on services")
            return response.status(400).json({
                status: false,
                message: "Invalid userId",
              });
        }else{

            const newRequest = await RecommendationServices.addRecomendations(product);

            if (newRequest) {
                return response.status(201).json({
                    status: true,
                    message: "Product added Successfully"
                  });
            }else{
                throw "Failed to add data"
            }
        }
    } catch (error) {
        console.log(error.message)
       return response.status(404).json(
            {
                status : false,
                data : error.message
            }
        )
        
    }
}


exports.getRecommendations = async(request,response)=>{

    try {
        const successState = await RecommendationServices.getAllRecommendations();
        
        if(successState){
            response.status(200).json(
                {
                    status : true,
                    data : successState
                }
            )
        }else{
            throw "Failed to get data"
        }
    } catch (error) {
        response.status(404).json(
            {
                status : false,
                data : error
            }
        ),
        console.log(error);
    }
}