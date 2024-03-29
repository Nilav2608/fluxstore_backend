const {Cart} = require("../models/cart.model");




class CartServices{

  static async addToCart(cartData){
        try {
            // const cartAdded = await Cart({
            //     userId: cartData.newUserId,
            //     productId: cartData.newProductId,
            //     productName: cartData.newProductName,
            //     price: cartData.newPrice,
            //     size: cartData.newSize,
            //     color: cartData.newColor,
            //     imageUrl: cartData.newImageUrl,
            //     quantity: cartData.newQuantity,
            //     selected: cartData.newSelected
            // });
            const cartAdded = await Cart(cartData);
            await cartAdded.save()
              .catch((error) => {
                console.error('Error inserting document:', error);
              });

            if(cartAdded){
                return true
            }else{
                throw Error("Failed to add to cart")
            }
        } catch (error) {
            console.log(error.message)
            return false
            
        }
    }

    static async getUserCartITems(userId){
         const carITems = await Cart.find({userId : userId});
         if (carITems) {
             return carITems;
         }else{
          return [];
         }
    }

    static async deleteFromCart(data) {
        try {
    const itemExists = await Cart.find({
        _id: data.id
    //   email: data.userId
    });

    if (itemExists) {
      //deleting cart items
      const deleteCartItem = await Cart.deleteOne({ _id: data.id });
      const carITems = await Cart.find({userId : data.userId});

      if (deleteCartItem.deletedCount > 0) {
        return {"status":true, "cart" : carITems};
      } else {
        return {"status":false, "cart" : []};;
      }
    } else {
      return {"status":false, "cart" : []};
    }
  } catch (error) {
    console.error("Error deleting item from cart:", error.message);
    return {"status":false, "cart" : []};;
  }
}

}

module.exports = CartServices;