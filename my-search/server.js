const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);
//my mangod called googlebooks
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
{
    useCreateIndex: true,
    useNewUrlParser: true
  }
);
//* (get) - Will load your single HTML page in 
// client/build/index.html. Make sure you have this after all other routes are defined.

// don't think i need this sincei already have it in line #12 ,but it said add it in the homework instruction
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// port 3000
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});