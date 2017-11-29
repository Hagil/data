var express = require('express');
var routes = require('./routes/routes');
var bodyParser = require('body-parser');
var app = express();
var port = 3500;


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(routes);
app.listen(port, listening);



function listening (){
    console.log('happy friday on localhost:' + port);
}
