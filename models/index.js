var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/project1-floating-peak" );



module.exports.Tag = require("./tag.js");
module.exports.Photo = require("./photo.js");
