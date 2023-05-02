const express = require("express");
const {  createPost, getAllPost } = require("../controllers/Post");
const { createComment } = require("../controllers/comment");
const { LikePost, UnLikePost } = require("../controllers/Like");



const CommentRouter = express.Router();
const PostRouter = express.Router();
const LikedRouter = express.Router();
const unLikedRouter = express.Router();


CommentRouter.route("/create/comment")
.post(createComment);


PostRouter.route("/create/post")
.post(createPost)


PostRouter.route("/get/post")
.get(getAllPost)

LikedRouter.route("/likes")
.post(LikePost)

unLikedRouter.route("/dislike")
.post(UnLikePost)


module.exports = {
    CommentRouter,PostRouter,LikedRouter,unLikedRouter
};
