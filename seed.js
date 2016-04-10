var db = require("./models");

var photoList = [];
photoList.push({
    title: 'Rainbow Lion',
    about: 'Galactic rainbow lion image',
    url: 'https://raw.githubusercontent.com/Smicl11/project1-floating-peak/master/public/images/rainbowLion.jpg',
  });
photoList.push({
    title: 'Floating Peak',
    about: 'Chinese mountains that look like amazing',
    url: 'https://raw.githubusercontent.com/Smicl11/project1-floating-peak/master/public/images/floatingPeak.jpg',
  });

var sampleTags = [];
sampleTags.push({ tag: 'pretty' });
sampleTags.push({ tag: 'iphone' });
sampleTags.push({ tag: 'hipster' });
sampleTags.push({ tag: 'something' });
sampleTags.push({ tag: 'wow' });

photoList.forEach(function(photo) {
  photo.tags = sampleTags;
});


db.Photo.remove({}, function(err, photos){

  db.Photo.create(photoList, function(err, photos){
    if (err) { return console.log('ERROR', err); }
    process.exit();
  });

});
