const mongoose = require('mongoose');
const { Schema } = mongoose;



const productSchema = new Schema({
  productName: {
    type: String,
    required:true
  },
  imageUrl: {
    type: String,
    required:true
  },
  price: {
    type: Number,
    required:true
  },
  description: {
    type: String,
    required:true
  },
  ratings: {
    type: Number,
    required:true
  },
  sizes: {
    type: [String],
  },
  colors: {
    type: [String],
  },
  favorite: {
    type: Boolean,
  },
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;