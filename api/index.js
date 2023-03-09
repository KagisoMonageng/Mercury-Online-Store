var express = require("express");
var cors = require("cors");
require("dotenv").config();
var app = express();

var corsOptions = {
  origin: "*",
};
var account = require('./app/routes/account')



app.use(express.json());
app.use(cors(corsOptions));

app.listen(3000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

app.get('/', (req, res) => {
  res.send('API is ready!')
})

app.use('/account',account)

