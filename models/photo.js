var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PhotoSchema = new Schema ({
  url: 'String',
  date: 'String',
  story: 'String'
});

var Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;
