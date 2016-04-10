var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Tag = require("./tag.js");

var PhotoSchema = new Schema ({
  title: 'String',
  about: 'String',
  url: 'String',
  tags: [Tag.schema],
});

var Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;
