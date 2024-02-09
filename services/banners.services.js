const Banner = require("../models/banners.model");



class BannerServices{


    static async addBanners(bannerData){
        const addedResults = await Banner(bannerData);
        await addedResults.save().then((result) => {
            console.log('Document inserted successfully:', result);
          })
          .catch((error) => {
            console.error('Error inserting document:', error);
          });
        if (addedResults) {
            return true;
        }else{
            return false;
        }
    }

    static async getBanners(){
        const banners = await Banner.find({});
        if (banners) {
            return banners;
        }else{
            return false;
        }
    }
}


module.exports = BannerServices;