const { request, response } = require("express");
const BannerServices = require("../services/banners.services");




exports.getAllBanners = async (request,response) =>{

    try {
        const results = await BannerServices.getBanners();

        if (results) {
            response.status(200).json(
                {
                    status : true,
                    data : results
                }
            )
        }else{

            throw "Failed to get data"
        }
    } catch (error) {
        response.status(404).json(
            {
                status : false,
                data : error
            }
        ),
        console.log(error);
    }
}


exports.addNewBanner = async (request,response) =>{

    try {
        const bannerData = request.body;
        const results = await BannerServices.addBanners(bannerData);

        if (results) {
            response.status(200).json(
                {
                    status : true,
                    data : "New Banner is added"
                }
            )
        }else{
            
            throw "Failed to get data"
        }
    } catch (error) {
        response.status(404).json(
            {
                status : false,
                data : error
            }
        ),
        console.log(error);
    }
}