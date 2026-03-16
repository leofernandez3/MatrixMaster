const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.loginPage = (req, res) => {
    res.render("loginRegister");
};

exports.register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        } = req.body;
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            return res.send("All fields are required");
        }
        if (firstName.length > 10) {
            return res.send("First name cannot exceed 10 characters");
        }
        if (lastName.length > 15) {
            return res.send("Last name cannot exceed 15 characters");
        }
        if (password !== confirmPassword) {
            return res.send("Passwords do not match");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });
        const token = jwt.sign({
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        }, "secretkey");
        res.cookie("token", token);
        res.redirect("/welcome");
    } catch (err) {
        res.send(err.message);
    }
};

exports.login = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    const user = await User.findOne({
        email
    });
    if (!user) {
        return res.send("User not found");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.send("Incorrect password");
    }
    const token = jwt.sign({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    }, "secretkey");
    res.cookie("token", token);
    res.redirect("/welcome");
};

exports.welcome = (req, res) => {
    res.render("welcome", {
        user: req.user
    });
};

exports.logout = (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
};