const Post = require("../Models/Post");
const Comment = require("../Models/Comment");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.postOnePost = async (req, res) => {
  try {
    const { body } = req.body;

    if (!body || body.length < 25) {
      return res.status(400).json({
        message: "Post must be at least 25 characters"
      });
    }

    const post = await Post.create({ body });

    res.status(201).json(post);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOnePost = async (req, res) => {
  try {

    const { body } = req.body;

    if (!body || body.length < 25) {
      return res.status(400).json({
        message: "Post must be at least 25 characters"
      });
    }

    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { body },
      { new: true }
    );

    res.status(200).json(post);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePost = async (req, res) => {
  try {

    await Post.findByIdAndDelete(req.params.id);
    await Comment.deleteMany({ postId: req.params.id });

    res.status(200).json({
      message: "Post deleted successfully"
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllCommentsPost = async (req, res) => {
  try {

    const comments = await Comment.find({
      postId: req.params["id-post"]
    });

    res.status(200).json(comments);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.postOneComment = async (req, res) => {
  try {

    const { body } = req.body;

    if (!body || body.length < 25) {
      return res.status(400).json({
        message: "Comment must be at least 25 characters"
      });
    }

    const comment = await Comment.create({
      body,
      postId: req.params.id
    });

    res.status(201).json(comment);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
