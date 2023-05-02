const Comment = require("../models/CommentModel");
const Post = require("../models/PostModel");

async function createComment(req, res) {
  try {
    const { post, user, body } = req.body;

    const comment = new Comment({
      post,
      user,
      body,
    });
    const commentObj = await comment.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: commentObj._id } },
      { new: true }
    )
      .populate("comments")
      .exec();

    res.json({
      message: "Comment created",
      comment: commentObj.body,
      data: updatedPost,
    });
  } catch (error) {
    res.send({
      message: error.message,
      data: null,
    });
  }
}
module.exports = {
    createComment
}