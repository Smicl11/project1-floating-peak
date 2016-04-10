var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var TagSchema = new Schema ({
  tag: 'String',

});

var Tag = mongoose.model('Tag', TagSchema);

module.exports = Tag;
