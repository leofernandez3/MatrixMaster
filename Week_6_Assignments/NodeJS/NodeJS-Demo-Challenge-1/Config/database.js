const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://leofernandez87_db_user:TI8Zjc1LNnYcCS2q@cluster0.ogxtf90.mongodb.net/demoChallenge1",
)
.then(() => console.log("DB connected successfully"))
.catch(err => console.log("DB connection error:", err));