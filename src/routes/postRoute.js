const postRoute = require('express').Router();
const postController = require('../controllers/postController');
const validatePost = require('../middlawares/validatePost');
const validateToken = require('../middlawares/validateToken');

postRoute.post('/', validateToken, validatePost, postController.createPost);
postRoute.get('/', validateToken, postController.getPosts);
postRoute.get('/:id', validateToken, postController.getPostsById);

module.exports = postRoute;