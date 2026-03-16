const jwt = require("jsonwebtoken");

exports.isLoggedIn = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect("/");
    }
    try {
        const decoded = jwt.verify(token, "secretkey");
        req.user = decoded;
        next();
    } catch (err) {
        res.redirect("/");
    }
};