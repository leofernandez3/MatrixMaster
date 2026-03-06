const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://leofernandez87_db_user:TI8Zjc1LNnYcCS2q@cluster0.ogxtf90.mongodb.net/TheFacebookChallenge"
	);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error!"));

db.once("open", function () {
	console.log("Connected successfully!");
});

module.exports = db;