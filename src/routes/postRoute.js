const postRoute = require('express').Router();
const postController = require('../controllers/postController');
const validatePost = require('../middlawares/validatePost');
const validateToken = require('../middlawares/validateToken');

postRoute.post('/', validateToken, validatePost, postController.createPost);

module.exports = postRoute;