const {Router} = require("express")
const {createPost,deletePost,getAllPosts,getSinglePost,updatePost} 
= require('../controllers/posts.controller')


const postRouter = Router()

postRouter.route("/")
.get(getAllPosts)
.post(createPost);

postRouter
.route("/postid")
.get(getSinglePost)
.patch(updatePost)
.delete(deletePost)

module.exports = postRouter;

