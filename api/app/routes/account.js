var express = require("express");
var account = require("../controllers/account");

var router = express.Router();

router.get('/',account.getUser);

module.exports = router;
