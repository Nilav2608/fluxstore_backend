const router = require("express").Router();
const userController = require('../controllers/user.controller');

router.post('/api/v1/user/registerUser',userController.register);
router.post('/api/v1/user/login',userController.login);
router.post('/api/v1/user/getUser',userController.getUser);



module.exports = router;