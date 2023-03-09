var pg = require('pg')
var client = new pg.Client('postgres://hrhspfng:0ymQE4FNu1XKDX_L14gGXVy01w2TwFpl@mouse.db.elephantsql.com/hrhspfng')

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
