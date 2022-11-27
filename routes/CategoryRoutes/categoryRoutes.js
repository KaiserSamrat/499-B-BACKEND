const express = require('express');
const categoryController = require('../../controllers/CategoryController/categoryController');
const authController = require('../../controllers/authController');
const router = express.Router();
const { uploadS3 } = require('../../middleware/multer');


router.use(authController.protect );

router
    .route('/')
    .get(authController.restrictTo('BUYER', 'ADMIN', 'SELLER'), categoryController.getCategory)
    .post(authController.restrictTo('BUYER', 'ADMIN', 'SELLER'), categoryController.createsCategory);


router
    .route('/:id')
    .get(authController.restrictTo('BUYER', 'ADMIN', 'SELLER'), categoryController.getSingleCategory)
    // .patch(authController.restrictTo('BUYER', 'ADMIN', 'SELLER'), announcementController.updateannouncement)
    // .delete(authController.restrictTo('BUYER', 'ADMIN', 'SELLER'), announcementController.deleteannouncement)

module.exports = router;
