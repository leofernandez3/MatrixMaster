const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  post: {
    type: String,
    required: [true, "Post is required"],
    minlength: [25, "Post should be minimum 25 characters"]
  }
}, { timestamps: true });

module.exports = model("Post", postSchema);