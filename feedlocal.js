var express =require('express'),
    bodyParser=require('body-parser'),
    oauthserver = require('oauthio'),
    tpl = require('ejs');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  var publicKey = 12345;
  res.render('index', { keypub : publicKey} );
});



app.listen(5000);
