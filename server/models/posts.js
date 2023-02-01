const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  title:{
    type: String,
    required: true,
    maxlength: 150,
    minlength: 1,
  },
  body:{
    type: String,
    required: true,
    minlength: 1,
  }
});

const Post = new mongoose.model("Post", schema);

module.exports.Post = Post;