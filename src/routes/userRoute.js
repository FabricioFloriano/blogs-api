const userRouter = require('express').Router();
const userController = require('../controllers/userController');
const validateDisplayName = require('../middlawares/validateDisplayName');
const validateEmailAndPass = require('../middlawares/validateEmailAndPass');
const validateToken = require('../middlawares/validateToken')

userRouter.post('/', validateDisplayName, validateEmailAndPass, userController.signUp);
userRouter.get('/', validateToken, userController.getUsers);

module.exports = userRouter;