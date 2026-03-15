const jwt = require("jsonwebtoken");
const Post = require("../Models/Post");
const Comment = require("../Models/Comment");

exports.addPost = async (req, res) => {
  try {

    const { post } = req.body;

    if (!post || post.length < 25) {
      return res.status(400).send("Post must be at least 25 characters");
    }

    await Post.create({
      body: post,
      userName: req.user.name
    });

    res.redirect("/");

  } catch (err) {

    const posts = await Post.find()
      .populate("comments")
      .sort({ createdAt: -1 });

    res.render("index", {
      posts,
      error: err.message,
      user: req.user || null
    });
  }
};

exports.updatePost = async (req, res) => {
  try {

    const { post } = req.body;

    await Post.findByIdAndUpdate(req.params.id, {
      body: post
    });

    res.redirect("/");

  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deletePost = async (req, res) => {
  try {

    await Post.findByIdAndDelete(req.params.id);
    await Comment.deleteMany({ postId: req.params.id });

    res.redirect("/");

  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getPosts = async (req, res) => {

  try {

    let user = null;

    if (req.cookies && req.cookies.token) {

      try {
        const decoded = jwt.verify(req.cookies.token, "secretkey");
        user = decoded;
      } catch (err) {
        user = null;
      }

    }

    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate("comments");

    res.render("index", { posts, user });

  } catch (err) {
    res.status(500).send(err.message);
  }

};