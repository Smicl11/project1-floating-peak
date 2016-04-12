var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE" );



module.exports.Tag = require("./tag.js");
module.exports.Photo = require("./photo.js");
