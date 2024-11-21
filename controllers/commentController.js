const postModel = require('../models/postsModel');
const commentModel = require('../models/commentModel');
const asyncHandler = require('express-async-handler');


exports.createComment = asyncHandler(async (req, res) => {
   const { text } = req.body;
   const post_id = req.params.id;
   const newComment = new commentModel({ post_id: post_id, text });
   await newComment.save();
   await postModel.findByIdAndUpdate(post_id, { $push: { comments: newComment._id } });

   return res.status(201).json({
        success: true,
        message: "Comment has been posted",
        post: newComment
    })
});


exports.deleteComment = asyncHandler(async (req, res) => {
    const comment_id = req.params.id;

    const deleteComment = await commentModel.findByIdAndDelete(
        comment_id
    )

    return res.status(204).json({
        success: true,
        message: "Post has been deleted",
        post: deleteComment
    })
});


exports.updateComment = asyncHandler(async (req, res) => {
    const { text } = req.body;
    const comment_id = req.params.id;

    const updateComment = await commentModel.findByIdAndUpdate(
        comment_id,
 {text},
        {new: true}
    )

    return res.status(200).json({
        success: true,
        message: "Comment has been updated",
        post: updateComment
    });

});
