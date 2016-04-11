var db = require("./models");

var photoList = [];
photoList.push({
    title: 'Rainbow Lion',
    about: '8-bit cray trust fund, tacos squid four dollar toast sriracha synth fanny pack. Tacos bicycle rights hella venmo hashtag',
    url: 'https://raw.githubusercontent.com/Smicl11/project1-floating-peak/master/public/images/rainbowLion.jpg',
  });
photoList.push({
    title: 'Hallelujah Mountains',
    about: 'Normcore DIY bitters lo-fi, pop-up raw denim pork belly vice heirloom migas. Wolf banjo 3 wolf moon synth, williamsburg iPhone 8-bit thundercats.',
    url: 'https://raw.githubusercontent.com/Smicl11/project1-floating-peak/master/public/images/floatingPeak.jpg',
  });
photoList.push({
    title: 'Bay Bridge',
    about: 'Cred twee before they sold out shoreditch etsy bushwick. Dreamcatcher everyday carry chambray poutine, deep v normcore slow-carb hella scenester keffiyeh master cleanse.',
    url: 'https://raw.githubusercontent.com/Smicl11/project1-floating-peak/master/public/images/BayBridge.jpg',
  });
photoList.push({
    title: 'Hidden Beach',
    about: 'Kale chips meggings farm-to-table trust fund, affogato sustainable biodiesel shabby chic mustache echo park.',
    url: 'https://raw.githubusercontent.com/Smicl11/project1-floating-peak/master/public/images/beach.jpg',
  });
photoList.push({
    title: 'Waterfall',
    about: 'Pour-over chicharrones pitchfork asymmetrical keffiyeh, 3 wolf moon skateboard bicycle rights distillery heirloom art party waistcoat.',
    url: 'https://raw.githubusercontent.com/Smicl11/project1-floating-peak/master/public/images/waterFall.jpg',
  });

var sampleTags = [];
sampleTags.push({ tag: 'dreamcatcher' });
sampleTags.push({ tag: 'tumblr' });
sampleTags.push({ tag: 'cleanse' });


photoList.forEach(function(photo) {
  photo.tags = sampleTags;
});


db.Photo.remove({}, function(err, photos){

  db.Photo.create(photoList, function(err, photos){
    if (err) { return console.log('ERROR', err); }
    process.exit();
  });

});
