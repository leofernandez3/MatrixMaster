const Feed = require("../models/Feed");

exports.homePage = async function(req,res){

    const posts = await Feed.find().sort({createdAt:-1});

    res.render("feed",{posts});

};

exports.addPost = async function(req,res){

    const lastPost = await Feed.findOne().sort({ postId: -1 });

    let newId = 1;

    if(lastPost && lastPost.postId){
        newId = lastPost.postId + 1;
    }

    const post = new Feed({
        postId: newId,
        name: req.body.name,
        message: req.body.message
    });

    await post.save();

    res.redirect("/feed");

};

exports.seeMore = async function(req,res){

    const post = await Feed.findOne({postId:req.params.id});

    res.render("post",{post});

};


exports.editPost = async function(req,res){

    const post = await Feed.findOne({postId:req.params.id});

    res.render("edit",{post});

};

exports.updatePost = async function(req,res){

    await Feed.updateOne(
        {postId:req.params.id},
        {
            name:req.body.name,
            message:req.body.message
        }
        );

    res.redirect("/feed/"+req.params.id);

};

exports.deletePost = async function(req,res){

    await Feed.deleteOne({postId:req.params.id});

    res.redirect("/feed");

};