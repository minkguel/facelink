const postModel = require('../models/postsModel');
const commentModel = require('../models/commentModel');
const asyncHandler = require('express-async-handler');


exports.createComment = asyncHandler(async (req, res) => {
   const { text } = req.body;
   const commentId = req.params.id;


});


exports.deleteComment = asyncHandler(async (req, res) => {
    const { text } = req.body;
    const commentId = req.params.id;

    const deletePost = await commentModel.findByIdAndDelete(
        commentId,
        {text},
        {new: true}
    )

});


exports.updateComment = asyncHandler(async (req, res) => {
    const { text } = req.body;
    const commentId = req.params.id;

});
