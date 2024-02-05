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

    static async addProduct(newData){
        try {
                const createProduct = await Products({
                    productName : newData.productName,
                    imageUrl:newData.imageUrl,
                    price:newData.price,
                    description:newData.description,
                    ratings:newData.ratings,
                    sizes:newData.sizes,
                    colors:newData.colors,
                    favorite:newData.favorite
                })
                await createProduct.save().then((result) => {
                    console.log('Document inserted successfully:', result);
                  })
                  .catch((error) => {
                    console.error('Error inserting document:', error);
                  });
                if (createProduct) {
                    return true
                }else{
                    throw "Failed to insert data"
                }

        } catch (error) {
            console.log(error)
        }
    }
}



module.exports = ProductCatalogServices;