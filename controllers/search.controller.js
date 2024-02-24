const { request } = require("../app");
const SearchServices = require("../services/search.services");



exports.searchByProductName = async (request,response) =>{

    const productName = request.params.productName;

    try {
        if (!productName) {
            
            return response.status(400).json({
                status: false,
                message: "Invalid query",
              });
        }else{

            const successState = await SearchServices.serarchAllProducts(productName);

            if (successState) {
                return response.status(200).json({
                    status: true,
                    data: successState
                  });
            }else{
                throw "Failed to get orders"
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