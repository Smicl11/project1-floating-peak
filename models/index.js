var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project1-floating-peak");

module.exports.User = require("./user.js");
module.exports.Photo = require("./photo.js");
