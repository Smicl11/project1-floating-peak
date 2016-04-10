// SERVER-SIDE JAVASCRIPT

var express = require('express');
var app = express();
var db = require('./models');
var controllers = require('./controllers');

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
app.get('/api/photos', function sanity (req, res) {
  res.send(200).json({
    message: "hello, world"
  });
});



/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
