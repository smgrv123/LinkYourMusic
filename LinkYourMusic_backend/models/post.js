const mongoose = require("mongoose");

const PostScheme = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  songName: {
    type: String,
    required: true,
  },
  songURL: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Posts", PostScheme);
