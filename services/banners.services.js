const Banner = require("../models/banners.model");



class BannerServices{


    static async addBanners(bannerData){
        const addedResults = await Banner(bannerData);
        await addedResults.save()
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