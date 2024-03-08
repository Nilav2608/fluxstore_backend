const Recommendations = require("../models/recommendations.model");



class RecommendationServices {

    static async addRecommendations(products){
        const product = await Recommendations(products);
        const results = await product.save();
        if (results) {
            return true
        }else{
            return false;
        }
    }

    static async getAllRecommendations(){
        try {
            const productsData = await Recommendations.find({});
            return productsData;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = RecommendationServices;