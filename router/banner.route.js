const router = require('express').Router();

const BannersController = require('../controllers/banners.controller');


router.get('/api/v1/getAllBanners',BannersController.getAllBanners);
router.post('/api/v1/addNewBanner',BannersController.addNewBanner);

module.exports = router;