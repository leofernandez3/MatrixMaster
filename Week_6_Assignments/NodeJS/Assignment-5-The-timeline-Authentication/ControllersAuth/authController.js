const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET = "secretkey";

exports.register = async (req,res)=>{

  try{

    const {name,email,password} = req.body;

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await User.create({
      name,
      email,
      password:hashedPassword
    });

    res.redirect("/login");

  }catch(err){
    res.send(err.message);
  }

};

exports.login = async (req,res)=>{

  try{

    const {email,password} = req.body;

    const user = await User.findOne({email});

    if(!user){
      return res.send("User not found");
    }

    const valid = await bcrypt.compare(password,user.password);

    if(!valid){
      return res.send("Wrong password");
    }

    const token = jwt.sign(
      {id:user._id,name:user.name},
      'secretkey',
      {expiresIn:"1d"}
    );

    res.cookie("token",token);

    res.redirect("/");

  }catch(err){
    res.send(err.message);
  }

};

exports.logout = (req,res)=>{
  res.clearCookie("token");
  res.redirect("/login");
};