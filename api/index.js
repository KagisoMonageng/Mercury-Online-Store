var express = require("express");
var cors = require("cors");
require("dotenv").config();
var app = express();
var corsOptions = {
  origin: "*",
};

app.use(express.json());
app.use(cors(corsOptions));

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

module.exports = app;

