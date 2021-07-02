const router = require("express").Router();
const Post = require("../models/post");

router.patch("/", async (req, res) => {
  try {
    const update = await Post.updateOne(
      { _id: req.body._id },
    //   { $set: { songName: req.body.songName } },
      { $set: { songURL: req.body.songURL } }
    );
    res.json(update);
  } catch (error) {
    res.sendStatus(420);
  }
});

module.exports = router;
