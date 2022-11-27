const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, 'Please tell us your product name!']
  },
  image: String,
  shop: {
      type: mongoose.Types.ObjectId,
      ref: 'Shop',
  },
  category: {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
  },
  price: {
      type: Number,
      required: true
  },
  sellPrice: {
    type: Number,
    default: 0
  }
  ,
  discount: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: true,
    select: false
  }
},
{
  timestamps: true
});


const product = mongoose.model('Product', productSchema);

module.exports = product;
