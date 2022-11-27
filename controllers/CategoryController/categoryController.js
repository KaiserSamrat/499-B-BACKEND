const Category = require('../../models/CategoryModel/categoryModel');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');
const UserLiked = require('../../models/AnnounceMent/userLiked')


exports.createsCategory = catchAsync(async (req, res, next) => {

    const category = await Category.create({...req.body
    });
    res.status(201).json({
        status: 'success',
        category
    })
})


exports.getCategory = catchAsync(async (req, res, next) => {
    let {pageNo, limit} = req.query;
    pageNo = parseInt(pageNo);
    limit = parseInt(limit);
    let value = (parseInt(pageNo) - 1) * parseInt(limit);
    let announcement;
    let startIndex = value > 0 ? value : 0;
    let array = [];
    if (pageNo === 0 && limit === 0) {
        announcement = await Category.find({
            // active: true
        })
    }else{
        announcement = await Category.find({
            // active: true
        }).sort({ createdAt: -1 })
            .skip(startIndex).limit(parseInt(limit));
    }
     
    res.status(200).json({
        status: 'success',
        category: announcement
    });
})

exports.getSingleCategory = catchAsync(async (req, res, next) => {
    let {id} = req.params;
    
    const category = await Category.findById(id);
    res.status(200).json({
        status: 'success',
        category:  category
    });
})


