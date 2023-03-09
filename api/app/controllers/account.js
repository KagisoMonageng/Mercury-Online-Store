var client = require("../config/db.config");
var bcrypt = require("bcrypt");

exports.getUser = (req, res) => {
  res.status(200).json({ message: "Get user works" });
};
