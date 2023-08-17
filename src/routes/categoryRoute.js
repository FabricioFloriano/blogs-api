const categoryRoute = require('express').Router();
const categoryController = require('../controllers/categoryController');
const validateCategoryT = require('../middlawares/validadeCategoryT');

categoryRoute.post('/', validateCategoryT, categoryController.createCategory);

module.exports = categoryRoute;
