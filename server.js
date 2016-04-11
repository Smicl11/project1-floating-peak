// SERVER-SIDE JAVASCRIPT

var express = require('express');
var app = express();
var db = require('./models');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

//use body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));




/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
 * JSON API Endpoints
 */
app.get('/api/photos', function index (req, res) {
  db.Photo.find({}, function (err, allPhotos) {
    res.json(allPhotos);
  });
});

app.post('/api/photos', function create(req, res) {

  var tags = req.body.tags.split(',').map(function(item) { return {tag: item.trim()}; } );
  req.body.tags = tags;

  console.log('body', req.body);

  db.Photo.create(req.body, function(err, photo) {
    if (err) { console.log('error', err); }
    console.log(photo);
    res.json(photo);
  });
});

app.delete('/api/photos/:pid', function destroy(req, res){
  db.Photo.findOneAndRemove({ _id: req.params.photoId }, function(err, foundPhoto){
    res.json(foundPhoto);
    console.log(foundPhoto);
  });
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
