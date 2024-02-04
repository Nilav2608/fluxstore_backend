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
            console.log("on serivices")
            const cartAdded = await Cart(cartData);
            console.log(cartAdded)
            await cartAdded.save().then((result) => {
                console.log('Document inserted successfully:', result);
              })
              .catch((error) => {
                console.error('Error inserting document:', error);
              });

            if(cartAdded){
                return true
            }else{
                throw Error("Faild to add to cart")
            }
        } catch (error) {
            console.log(error.message)
            return false
            
        }
    }

    static async deleteFromCart(data) {
  try {
    const itemExists = await Cart.find({
        _id: data.id
    //   email: data.userId
    });
    if (itemExists) {
      const deleteCartItem = await Cart.deleteOne({ _id: data.id });

      if (deleteCartItem.deletedCount > 0) {
        console.log("Item removed from cart successfully");
        return true;
      } else {
        console.log("Failed to remove item from cart");
        return false;
      }
    } else {
      console.log("Item not found in the cart");
      return false;
    }
  } catch (error) {
    console.error("Error deleting item from cart:", error.message);
    return false;
  }
}

}

module.exports = CartServices;