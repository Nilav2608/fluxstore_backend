const recommendationsController = require('../controllers/recommendations.controller');

const router = require('express').Router();

router.post('/api/v1/products/postRecomendations',recommendationsController.recommendationsPostRequest);
router.get('/api/v1/products/getRecomendations',recommendationsController.getRecommendations);


module.exports = router;