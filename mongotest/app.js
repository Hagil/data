var express = require('express');
var app = express();
var port = 3500;
var routes = require('./routes/routes')

app.set('view engine', 'ejs');
app.use(routes);
app.listen (port, listening);

function listening (){
    console.log('listening on localhost:' + port);
}