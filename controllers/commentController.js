const postModel = require('../models/postsModel');
const commentModel = require('../models/commentModel');
const asyncHandler = require('express-async-handler');


exports.createComment = asyncHandler(async (req, res) => {
   const { text } = req.body;
   const postId = req.params.id;


});


exports.deleteComment = asyncHandler(async (req, res) => {
    const { text } = req.body;
    const postId = req.params.id;

    const deletePost = await commentModel.findByIdAndDelete
});


exports.updateComment = asyncHandler(async (req, res) => {
    const { text } = req.body;
    const postId = req.params.id;

});
