const express = require('express');
const router = express();
const userController = require('../controllers/userController');
const postController = require("../controllers/postsController");
const commentController = require("../controllers/commentController");

// User routes
router.post('/createUser', userController.createUser);
router.put('/updateUser/:id', userController.updateUser);
router.get('/getAllUsers', userController.getAllUsers);
router.delete('/deleteUser/:id', userController.deleteUser);

// Post routes
router.post('/createPost/user/:id/', postController.createPosts);
router.delete('/deletePost/:id/', postController.deletePost);
router.put('/updatePost/:id/', postController.updatePost);
router.put('/likePost/:id/like', postController.likePost);

//Comment routes
router.post('/createComment/:id/', commentController.createComment);
router.delete('/deleteComment/:id/', commentController.deleteComment);
router.put('/updateComment/:id/', commentController.updateComment);



module.exports = router;
