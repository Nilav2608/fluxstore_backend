const ProductCatalogServices = require("../services/product.services");



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

//productName,imageUrl,price,description,ratings,sizes,colors,favorite

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
    
        const successState = await ProductCatalogServices.addProduct(newProduct);
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