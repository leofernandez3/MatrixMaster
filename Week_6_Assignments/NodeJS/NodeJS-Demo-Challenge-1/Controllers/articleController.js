const Article = require("../Models/Article");


// HOME PAGE
exports.home = async (req,res)=>{

 const articles = await Article.find().sort({createdAt:-1});

 res.render("index",{articles});

};


// NEW ARTICLE PAGE
exports.newArticlePage = (req,res)=>{
 res.render("newArticle");
};


// CREATE ARTICLE
exports.createArticle = async (req,res)=>{

 try{

 const {title,article} = req.body;

 if(!title || !article){
  return res.send("Fields cannot be empty");
 }

 if(title.length < 25){
  return res.send("Title must be longer than 25 characters");
 }

 if(article.length < 100){
  return res.send("Article must be longer than 100 characters");
 }

 await Article.create({title,article});

 res.redirect("/");

 }catch(err){
  res.send(err.message);
 }

};


// VIEW ARTICLE
exports.viewArticle = async (req,res)=>{

 const article = await Article.findById(req.params.id);

 res.render("article",{article});

};


// EDIT PAGE
exports.editPage = async (req,res)=>{

 const article = await Article.findById(req.params.id);

 res.render("editArticle",{article});

};


// UPDATE ARTICLE
exports.updateArticle = async (req,res)=>{

 const {title,article} = req.body;

 if(title.length < 25){
  return res.send("Title must be longer than 25 characters");
 }

 if(article.length < 100){
  return res.send("Article must be longer than 100 characters");
 }

 await Article.findByIdAndUpdate(req.params.id,{title,article});

 res.redirect("/article/"+req.params.id);

};


// DELETE ARTICLE
exports.deleteArticle = async (req,res)=>{

 await Article.findByIdAndDelete(req.params.id);

 res.redirect("/");

};