const categoryRoute = require('express').Router();
const categoryController = require('../controllers/categoryController');
const validateCategoryT = require('../middlawares/ValidadeCategoryT');
const validateToken = require('../middlawares/validateToken');

categoryRoute.post('/', validateCategoryT, categoryController.createCategory);

categoryRoute.get('/', validateToken, categoryController.getAllCategories);

module.exports = categoryRoute;
