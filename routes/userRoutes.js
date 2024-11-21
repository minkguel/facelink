const express = require('express');
const router = express();
const userController = require('../controllers/userController');
const postController = require("../controllers/postsController");
const commentController = require("../controllers/commentController");

// User routes
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.get('/users', userController.getAllUsers);
router.delete('/users/:id', userController.deleteUser);
router.get('/users/:id/posts', userController.getUsersPosts);

// Post routes
router.post('/posts/:id/', postController.createPosts);
router.delete('/posts/:id/', postController.deletePost);
router.put('/posts/:id/', postController.updatePost);
router.put('/posts/:id/like', postController.likePost);
router.get('/posts', postController.findMostLikedPosts);
router.get('/posts/mostPostsByUsers', postController.amountOfPostByUsers)

// Comment routes
router.post('/comment/:id/', commentController.createComment);
router.delete('/comment/:id/', commentController.deleteComment);
router.put('/comment/:id/', commentController.updateComment);

module.exports = router;
