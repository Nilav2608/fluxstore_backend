const Recommendations = require("../models/recommendations.model");



class RecommendationServices {

    static async addRecomendations(products){
        console.log("on services")
        const product = await Recommendations(products);
        console.log(product)
        const results = await product.save();
        console.log(results)
        if (results) {
            return true
        }else{
            return false;
        }
    }

    static async getAllRecommendations(){
        console.log("on services")
        try {
            const productsData = await Recommendations.find({});
            console.log(productsData)
            return productsData;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = RecommendationServices;