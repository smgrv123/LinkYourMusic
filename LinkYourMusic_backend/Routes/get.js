const router = require("express").Router();
const Posts = require("../models/post");

router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find();
    res.json(posts);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
