var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;
var router = require("./config/routes");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('views', './views');
app.set('view engine', 'ejs');


app.listen(port);


// Middleware
app.use(function(req, res, next) {
    console.log('%s request to %s from %s', req.method, req.path, req.ip);
  
    next();
  });


console.log('Server started on ' + port);
app.use('/', router);
