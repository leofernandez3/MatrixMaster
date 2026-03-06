const express = require("express");
const app = express();

require("./config/db");

const routes = require("./config/routes");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(3000, function () {
	console.log("Server running on http://localhost:3000/feed");
});