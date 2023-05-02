const Post = require("../models/PostModel");
const likeModel = require("../models/likeModel");

async function LikePost(req, res) {
  try {
    const { post, user } = req.body;

    const Like = new likeModel({
      post,
      user,
    });
    const LikeObj = await Like.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: LikeObj._id } },
      { new: true }
    )
      //   .populate("likes")
      .exec();

    res.json({
      message: "Liked successfully",
      data: updatedPost,
    });
  } catch (error) {
    res.send({
      message: error.message,
      data: null,
    });
  }
}

async function UnLikePost(req, res) {
    try {
      const { post, like } = req.body;

      const unLikeObj = await likeModel.findOneAndDelete({post,_id:like})
  
      const updatedPost = await Post.findByIdAndUpdate(
        post,
        { $pull: { likes: unLikeObj._id } },
        { new: true }
      )
        //   .populate("likes")
        .exec();
  
      res.json({
        message: "unLiked 👀",
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
  LikePost,UnLikePost
};
