const userModel = require('../models/userModel')
const postModel = require('../models/postsModel')
const asyncHandler = require('express-async-handler');

exports.createUser = asyncHandler (async (req,res) => {
        const newPerson = new userModel(req.body);
        const person = await newPerson.save();
        return res.status(201).json({ message: 'User has been created', person });

});

exports.updateUser = asyncHandler(async (req, res) => {
        const user = await userModel.findByIdAndUpdate(req.params.id,req.body, {new: true})
        return res.status(201).json({ message: 'User has been updated', user });
});

exports.getAllUsers = asyncHandler(async (req, res) => {
        const user = await userModel.find({});
        return res.status(200).send(user);
});

exports.deleteUser = asyncHandler (async(req, res) => {
        await userModel.findByIdAndDelete(req.params.id)
        return res.status(200).send({message: 'User has succesfully been deleted'});
});

exports.getUsersPosts = asyncHandler(async (req, res) => {
        const userPosts = await postModel.find({user_id: req.params.id});
        return res.status(200).send(userPosts);
});