const postModel = require('../models/postsModel');
const commentModel = require('../models/commentModel');
const asyncHandler = require('express-async-handler');


exports.createComment = asyncHandler(async (req, res) => {
   const { text } = req.body;
   const post_id = req.params.id;
   const newComment = new commentModel({ post_id: post_id, text });
   await newComment.save();

   return res.status(201).json({
        success: true,
        message: "Comment has been posted",
        post: newComment
    })
});


exports.deleteComment = asyncHandler(async (req, res) => {
    const comment_id = req.params.id;

    const deletePost = await commentModel.findByIdAndDelete(
        comment_id
    )

    return res.status(204).json({
        success: true,
        message: "Post has been deleted",
        post: deletePost
    })
});


exports.updateComment = asyncHandler(async (req, res) => {
    const { text } = req.body;
    const comment_id = req.params.id;

});
