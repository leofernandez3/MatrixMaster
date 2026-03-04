const express = require("express");
require("./Config/database");
const routes = require("./Config/routes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});