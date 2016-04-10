var db = require("./models");

var photoList = [
  {
    title: 'Rainbow Lion',
    about: 'Galactic rainbow lion image',
    url: 'https://raw.githubusercontent.com/Smicl11/project1-floating-peak/master/public/images/rainbowLion.jpg',
    tags: ['lion', 'somethign else', 'pretty'],
    comment: 'What a great picture!'
  },
  {
    title: 'Floating Peak',
    about: 'Chinese mountains that look like amazing',
    url: 'https://raw.githubusercontent.com/Smicl11/project1-floating-peak/master/public/images/floatingPeak.jpg',
    tags: ['mountains', 'somethign else', 'pretty'],
    comment: 'What a great picture!'
  }
];


db.Photo.remove({}, function(err, photos){

  db.Photo.create(photoList, function(err, photos){
    if (err) { return console.log('ERROR', err); }
    process.exit();
  });

});
