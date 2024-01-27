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

//productName,imageUrl,price,descriptionn,ratings,sizes,colors,favorite

exports.addProducts = async(request,response,next)=>{
     const{productName,description,price,imageUrl,sizes,colors,favorite,ratings} = request.body;

     try {
        if (!(productName && imageUrl && price && description && ratings && sizes && colors && favorite)) {
            response.status(400).json(
                {
                    status : false,
                    message : "Invaid inputs, all the parameters are required"
                }
            )  
         }
         const newProduct = {
            productName : productName,
            imageUrl:imageUrl,
            price:price,
            description:description,
            ratings:ratings,
            sizes:sizes,
            colors:colors,
            favorite:favorite
         }
         console.log("---------------------------------------------");
         console.log("From front end");
         console.log(newProduct);
    
         const successState = await ProductCatalogServices.addProduct(newProduct);
         console.log(successState);
         if (successState) {
            response.status(201).json(
                {
                    status : true,
                    message:"New product added successfully"
                }
            )
         }
     } catch (error) {
        response.status(400).json(
            {
                status : false,
                message: error
            }
        )
     }
}