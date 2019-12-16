
var path = require('path');
var express = require("express");
var app     = express();


app.set('views', path.join(__dirname, '/public'));
var staticPath = path.join(__dirname, '/public');

app.use(express.static(staticPath, { maxAge: '2h' }));

app.get('/',function(req,res){
    res.sendFile('/index.html');
  });
// test
  app.listen(2500)