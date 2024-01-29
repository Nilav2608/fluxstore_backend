const Cart = require("../models/cart.model");




class CartServices{

    static async addToCart(cartData){
        try {
            const cartAdded = await Cart({
                userId: cartData.newUserId,
                productId: cartData.newProductId,
                productName: cartData.newProductName,
                price: cartData.newPrice,
                size: cartData.newSize,
                color: cartData.newColor,
                imageUrl: cartData.newImageUrl,
                quantity: cartData.newQuantity,
                selected: cartData.newSelected
            });

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
}

module.exports = CartServices;