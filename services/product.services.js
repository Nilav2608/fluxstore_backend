const Products = require("../models/product.model");


class ProductCatalogServices{


    static async getAllProducts(){
        try {
            const productsData = await Products.find({});
            console.log(productsData);
            return productsData;
        } catch (error) {
            console.log(error);
        }
    }
}



module.exports = ProductCatalogServices;