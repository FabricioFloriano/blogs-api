const postRoute = require('express').Router();
const postController = require('../controllers/postController');
const validatePost = require('../middlawares/validatePost');
const validateToken = require('../middlawares/validateToken');
const validatePostUpdated = require('../middlawares/validatePostUp');

postRoute.post('/', validateToken, validatePost, postController.createPost);
postRoute.get('/', validateToken, postController.getPosts);
postRoute.get('/:id', validateToken, postController.getPostsById);
postRoute.put('/:id', validateToken, validatePostUpdated, postController.updatePost); // < quebrado, onde ?? >  

module.exports = postRoute;