var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Photo = require("./photo.js");

var UserSchema = new Schema ({
  uid: 'String',
  about: 'String',
  photos: [Photo.schema]
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
