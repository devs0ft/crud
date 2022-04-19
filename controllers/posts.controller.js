const Post = require("../models/post.model")

const getAllPosts = async(req, res) =>{
    // res.send("All Posts")
    const posts = await Post.find();
    res.status(200).json(posts);
}

const getSinglePost = async (req,res) =>{
    res.send("Single Post")

}

const createPost = async (req, res) => {
    const post = await Post.create(req.body);
    // console.log(req.body);
    res.status(200).json({data: post});
    // res.send("Post created")
}

const updatePost = async (req, res) => {
    res.send("Post Updated")

}

const deletePost = async (req, res) =>{
    res.send("Post Deleted")
}
module.exports ={
    getAllPosts,
    getSinglePost,
    createPost,
    updatePost,
    deletePost,
}
