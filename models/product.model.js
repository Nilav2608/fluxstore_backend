const mongoose = require('mongoose');
const { Schema } = mongoose;



const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  descriptionn: {
    type: String,
  },
  ratings: {
    type: Number,
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