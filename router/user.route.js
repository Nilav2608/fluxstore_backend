const router = require("express").Router();
const userController = require('../controllers/user.controller');

router.post('/registerUser',userController.register);



module.exports = router;