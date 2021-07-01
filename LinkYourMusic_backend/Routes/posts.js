const router = require("express").Router();
const Post = require("../models/post");

router.post("/", async (req, res) => {
  // console.log('hello');
  // console.log(req.body.userName);
  const posts = new Post({
    userName: req.body.userName,
    songName: req.body.songName,
    songURL: req.body.songURL,
  });
  try {
    const postData=await posts.save()
    res.send(postData)
  } catch (error) {
      res.sendStatus(404)
      res.send(error)
  }
});

module.exports=router