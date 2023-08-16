const userRouter = require('express').Router();
const userController = require('../controllers/userController');
const validateDisplayName = require('../middlawares/validateDisplayName');
const validateEmailAndPass = require('../middlawares/validateEmailAndPass');

userRouter.post('/', validateDisplayName, validateEmailAndPass, userController.signUp);

module.exports = userRouter;