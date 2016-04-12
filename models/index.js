var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                      process.env.MONGOHQ_URL ||
                      "MONGODB_URI: mongodb://heroku_63jmqqqw:bp2u6011lr8fi0og766emfna55@ds023540.mlab.com:23540/heroku_63jmqqqw" );



module.exports.Tag = require("./tag.js");
module.exports.Photo = require("./photo.js");
