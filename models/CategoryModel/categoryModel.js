const mongoose = require("mongoose");

const categoryModel = mongoose.Schema(
  {
    categoryName: String,
    active: Boolean
},
  { timestamps: true }  
);

const category = mongoose.model("Category", categoryModel);

module.exports = category;