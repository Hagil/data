var express = require('express');
var app = express();
var routes = require('./routes/main_routes');
var bodyParser  = require('body-parser');
var port = 4500;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(routes);

app.listen(port, listening);

function listening() {
    console.log('broadcasting on localhost:' + port);
}