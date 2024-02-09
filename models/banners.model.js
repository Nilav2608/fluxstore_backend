const mongoose = require('mongoose');
const { Schema } = mongoose;

const bannerSchema = new Schema({
    title :{type:String},
    imagePath :{type:String},
    category :{type:String},
})

const Banner = mongoose.model("banners",bannerSchema)

module.exports = Banner;