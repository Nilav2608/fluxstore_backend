const mongoose = require('mongoose');
const { productSchema } = require("./product.model");



const Recommendations = mongoose.model("Recommendations",productSchema);

module.exports = Recommendations;