const userModel = require("../models/userModel");
const postModel = require("../models/postsModel")
const asyncHandler = require('express-async-handler');


exports.createPosts = asyncHandler(async (req, res) => {
        const { text } = req.body;
        const userId = req.params.id;
        const newPost = new postModel({ user_id: userId, text });
        const savedPost = await newPost.save();
        await userModel.findByIdAndUpdate(userId, { $push: { posts: savedPost._id } });

    return res.status(201).json({
        success: true,
        message: "Post created successfully",
        post: savedPost
    });
});


exports.deletePost = asyncHandler(async (req, res) => {
    const post_id = req.params.id;
    await postModel.findByIdAndDelete(post_id);
    return res.status(204).json({ message: 'Post has been deleted' });
});


exports.updatePost = asyncHandler(async (req, res) => {

    const {text} = req.body;
    const postId = req.params.id;

    const updatePost = await postModel.findByIdAndUpdate(
        postId,
        {text},
        {new: true}
    );

    return res.status(200).json({
        success: true,
        message: "Post has been updated",
        post: updatePost
    })
});


exports.likePost = asyncHandler(async (req, res) => {
    const post_id = req.params.id;

    const updateLikes = await postModel.findByIdAndUpdate(post_id, { $inc: { likes: 1 } }, { new: true });

    return res.status(200).json({ success: true, message: "Post liked successfully", post: updateLikes });
});

exports.findMostLikedPosts = asyncHandler(async (req, res) => {
    const mostLikedPosts = await postModel.aggregate([ {$sort: { likes: -1} }, { $limit: 5 }]);
    return res.status(200).json({ posts: mostLikedPosts });
});

exports.amountOfPostByUsers = asyncHandler(async (req, res) => {
    const post = await postModel.aggregate([{ "$group": { "_id": "$user_id", "totalPosts": { "$sum": 1 } } }, { "$sort": { "totalPosts": -1 } }]);
    return res.status(200).json(post);
});