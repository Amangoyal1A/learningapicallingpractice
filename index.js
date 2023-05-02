const express = require("express");
const { connectwithDB } = require("./config/database");
const app = express();
require("dotenv").config();
const {CommentRouter,PostRouter, LikedRouter, unLikedRouter}= require("./routes/blog");

app.use(express.json());

//base router
app.use("/api/v1", CommentRouter,PostRouter,LikedRouter,unLikedRouter);



connectwithDB();

app.get("/", (req, res) => {
  res.send("this is Homepage baby");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port number ${process.env.PORT || 3000}`);
});
