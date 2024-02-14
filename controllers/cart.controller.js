const { request, response } = require("../app");
const CartServices = require("../services/cart.services");



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

      const cartData = request.body;
      console.log(cartData);
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
            const cartSuccess = await CartServices.addToCart(cartData);
            console.log("method is intruded");
            console.log(cartSuccess);
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


exports.deleteFromCart = async (request, response, next) => {
    try {
      const { docId, userId } = request.body;
  
      if (!docId || !userId) {
        return response.status(400).json({
          status: false,
          message: "Invalid docId or userId",
        });
      }
      const queries = {
        id:docId,
        userId: userId,
      }
      const cartDeletionSuccess = await CartServices.deleteFromCart(queries);
  
      if (cartDeletionSuccess['status']) {
        return response.status(200).json({
          status: true,
          data: cartDeletionSuccess['cart'],
          message: "Product deleted successfully",
        });
      } else {
        return response.status(404).json({
          status: false,
          data: cartDeletionSuccess['dacartta'],
          message: "Cart item doesn't exist",
        });
      }
    } catch (error) {
      console.error(error);
      return response.status(500).json({
        status: false,
        data: cartDeletionSuccess['cart'],
        message: "Internal Server Error " + error.message,
      });
    }
  };


  exports.getUserCartItems = async (request,response) => {
      
    const {userId} = request.body;

    try {
       if (!userId) {
        return response.status(400).json({
          status: false,
          message: "Invalid userId",
        });
       }else{
         const results = await CartServices.getUserCartITems(userId);
         return response.status(200).json({
          status: true,
          data: results,
        });  
       }
    } catch (error) {
      console.error(error);
      return response.status(500).json({
        status: false,
        message: "Internal Server Error",
      });
    }
  }

