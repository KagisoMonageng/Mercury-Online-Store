var pg = require('pg')
var client = new pg.Client(process.env.CONNECTION_STRING)

client.connect(function(err){
  if (err) {
    console.log("Database connection error");
    console.log(err)
  }else
  {
    console.log("Database connected successfully");
  }

})

module.exports = client;
