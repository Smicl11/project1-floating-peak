var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project1-floating-peak");

module.exports.Tag = require("./tag.js");
module.exports.Photo = require("./photo.js");
