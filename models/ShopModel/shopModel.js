const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({

    ownerId: {
        type: mongoose.Types.ObjectId,
        index: true,
        ref: 'User',
    },
    // store name
    name: {
        type: String
    },
    alias: {
        type: String,
        index: true
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    // images: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Media'
    // }],
    // productCategories: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'ProductCategory'
    // }],
    aboutShop: {
        type: String
    },
    address: {
        type: String
    },
   
    location: {
        type: [Number], // [<longitude>, <latitude>]
        index: '2d', // create the geospatial index
        default: [0, 0]
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    activated: {
        type: Boolean,
        default: false
    },
},
    {
        timestamps: true
    });


const supply = mongoose.model('Shop', shopSchema);

module.exports = supply;



