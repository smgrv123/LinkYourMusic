const router = require("express").Router();
const Post = require("../models/post");

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Post.deleteOne({ _id: req.params.id });
    res.json({
      id: deleted.$clusterTime.signature.keyId,
      message: "Object has been successfully removed",
    });
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
