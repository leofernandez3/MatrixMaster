const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("./Config/database");
const routes = require("./Config/routes");

const app = express();

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set("view engine", "ejs");

app.use("/", routes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
