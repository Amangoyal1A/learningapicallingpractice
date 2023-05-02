const Post = require("../models/PostModel");

async function createPost(req, res) {
  try {
    const { title, body } = req.body;

    const post = new Post({
      title,
      body,
    });

    const postSave = await post.save();

    res.json({
      message: "Post created successfully",
      data: postSave,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
}

async function getAllPost(req, res) {
  try {
    const AllPost = await Post.find()
      .populate("likes")
      .populate("comments")
      .exec();
    res.json({
      message: "All posts",
      data: AllPost,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
}

module.exports = {
  createPost,
  getAllPost,
};
