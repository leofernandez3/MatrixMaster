const Post = require("../Models/Post");
const Comment = require("../Models/Comment");

exports.addComment = async (req, res) => {
  try {
    const { postId } = req.params;           
    const { comment } = req.body;            

    if (!comment || comment.length < 25) {
      return res.status(400).send("Comment must be at least 25 characters");
    }

    await Comment.create({ body: comment, postId });  
    res.redirect("/");                                 
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

exports.addPost = async (req, res) => {
    try {
        const { post } = req.body;
        await Post.create({ body: post });
        res.redirect("/");
    } catch (err) {
        const posts = await Post.find().populate("comments").sort({ createdAt: -1 });
        res.render("index", { posts, error: err.message });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const { post } = req.body;
        await Post.findByIdAndUpdate(req.params.id, { body: post });
        res.redirect("/");
    } catch (err) {
        res.send(err.message);
    }
};

exports.deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        await Comment.deleteMany({ postId: req.params.id });
        res.redirect("/");
    } catch (err) {
        res.send(err.message);
    }
};



exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate("comments"); 
    res.render("index", { posts });
  } catch (err) {
    res.send(err.message);
  }
};

