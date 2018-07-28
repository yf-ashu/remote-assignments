var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(require('./routes'));
app.listen(3000, function () {
  console.log('Listening on port 3000...')

})

var router = require('./routes');