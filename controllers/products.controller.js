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

exports.addProducts = async (request, response, next) => {
    const { productName, description, price, imageUrl, sizes, colors, favorite, ratings } = request.body;
    try {
      // const check = !(productName && imageUrl && price && description && ratings && sizes && colors && favorite);
      if (!productName || !imageUrl || !price || !description || !ratings || !sizes || !colors || favorite === undefined) {
        return response.status(400).json({
          status: false,
          message: "Invalid inputs, all parameters are required",
        });
      }else{
        const newProduct = {
          productName: productName,
          imageUrl: imageUrl,
          price: price,
          description: description,
          ratings: ratings,
          sizes: sizes,
          colors: colors,
          favorite: favorite,
        };
    
        console.log("From front end");
        const successState = await ProductCatalogServices.addProduct(newProduct);
        console.log(successState);
        if (successState) {
          return response.status(201).json({
            status: true,
            message: "New product added successfully",
          });
        }
      }
    } catch (error) {
      console.error(error);
      return response.status(500).json({
        status: false,
        message: "Internal Server Error",
      });
    }
  };  