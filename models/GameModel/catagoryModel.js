const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: [true, 'Please tell us your name!']
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


const category = mongoose.model('Categorydjdjjd', categorySchema);

module.exports = category;
