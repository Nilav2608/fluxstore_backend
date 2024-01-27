const ProductCatalogServices = require("../services/product.services");
const {request,response} = require('../app');



exports.getProducts = async(request,response,next)=>{

    try {
        const successState = await ProductCatalogServices.getAllProducts();

        if(successState){
            response.status(200).json(
                {
                    status : true,
                    data : successState
                }
            )
        }else{
            throw "Faild to get data"
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