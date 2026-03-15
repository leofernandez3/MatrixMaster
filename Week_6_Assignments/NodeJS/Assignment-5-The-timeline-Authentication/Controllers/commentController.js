const Comment = require("../Models/Comment");

exports.addComment = async (req, res) => {
  try {
    const { postId } = req.params;           
    const { comment } = req.body;            

    if (!comment || comment.length < 25) {
      return res.status(400).send("Comment must be at least 25 characters");
    }

    await Comment.create({ 
      body:comment,
      postId,
      author:req.user.name
    });
      
    res.redirect("/");                                 
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

exports.deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    res.send(err.message);
  }
};