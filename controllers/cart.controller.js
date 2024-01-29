const CartServices = require("../services/cart.services");
const {request,response} = require('../app');



exports.addToCart = async (request,response,next)=>{
    const {
        userId,
        productId,
        productName,
        price,
        size,
        color,
        imageUrl,
        quantity,
        selected
      } = request.body;
//productName && !userId && !productId && !imageUrl && !price && !size && !color && !quantity && selected
//productName || !userId || !productId || !imageUrl || !price || !size || !color || !quantity || selected === undefined
      try {
        if (!(productName && userId && productId && imageUrl && price && size && color && quantity && selected)) {
            return response.status(400).json({
               status: false,
               message: "Invalid inputs, all parameters are required",
             });
         }else{
            const mappedCartItems ={
               newUserId :userId,
               newProductName :productName,
               newProductId :productId,
               newImageUrl :imageUrl,
               newPrice :price,
               newSize :size,
               newColor :color,
               newQuantity :quantity,
               newSelected :selected,
            }
            const cartSuccess = await CartServices.addToCart(mappedCartItems);
            
            if(cartSuccess){
               return response.status(201).json({
                   status: true,
                   message: "New product is added to Cart!",
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
}