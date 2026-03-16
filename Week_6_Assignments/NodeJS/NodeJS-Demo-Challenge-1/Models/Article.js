const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true,
        minlength:25
    },
    article:{
        type:String,
        required:true,
        minlength:100
    }
},
    {
        timestamps:true
    }
);

module.exports = mongoose.model("Article",ArticleSchema);