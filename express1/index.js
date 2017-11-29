var express = require('express');
var port = 3500;
var routes = require('./routes/admin_routes');
var app = express();

app.set('view engine', 'ejs');
app.listen(port, listening);
app.use(routes);

function listening (){
    console.log('listening on localhost:' + port);
}