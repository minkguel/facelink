const express = require('express');
const router = express();
const userController = require('../controllers/userController');
const postController = require("../controllers/postsController");

router.post('/createUser', userController.createUser);
router.put('/updateUser/:id', userController.updateUser);
router.get('/getAllUsers', userController.getAllUsers);
router.delete('/deleteUser/:id', userController.deleteUser);

router.post('/createPost/user/:id/', postController.createPosts);
router.delete('/deletePost/:id/', postController.deletePost);
router.put('/updatePost/:id/', postController.updatePost);
router.put('/likePost/:id/like', postController.likePost);

module.exports = router;
