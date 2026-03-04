const Post = require("../Models/post");

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.render("index", { posts, error: null });
  } catch (err) {
    res.render("index", { posts: [], error: err.message }); 
  }
};

exports.addPost = async (req, res) => {
  try {
    const { post } = req.body;
    await Post.create({ post });
    res.redirect("/");
  } catch (err) {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.render("index", { posts, error: err.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    res.send(err.message);
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { post } = req.body;
    await Post.findByIdAndUpdate(req.params.id, { post });
    res.redirect("/");
  } catch (err) {
    res.send(err.message);
  }
};