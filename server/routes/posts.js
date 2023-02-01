const express = require("express");
const { Post} = require("../models/posts");
const postRouter = express.Router();


postRouter.get("/:id", async (req, res) => {
  const postsById = await Post.find({userId:req.params.id});
  res.send(postsById);
});

postRouter.get("/", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

postRouter.delete('/',async(req,res)=>{
    const posts=await Post.deleteMany();
    res.send(posts)
})
postRouter.post("/", async (req, res) => {
    console.log(req.body)
  try {
    let post = new Post({
      ...req.body,
    });
    post = await post.save();
    res.status(201).send("you did it")
    console.log(post);
  } catch (error) {
    res.status(401).send("post is not valid");
  }
});



module.exports = postRouter;