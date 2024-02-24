const { Products } = require("../models/product.model");


class SearchServices {
    
    static async serarchAllProducts(pname){
        try {
            const productsData = await Products.find({
                productName : { $regex : pname, $options: "i"}
            });
            return productsData;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = SearchServices;