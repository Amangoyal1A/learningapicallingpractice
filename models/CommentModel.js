const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  user: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    reuqired: true,
  },
});


module.exports = mongoose.model("Comment",CommentSchema);