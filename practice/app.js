var app = require('express')();
var port = 80;
var routes = require('./routes/routes');
var fileSystem = require('fs');
var circularJSON = require('circular-json');


app.set('view engine', 'ejs');
app.use(explorer);
app.use(routes);


function explorer(req, res, next) {
    res.mood = 'dying for a cig';
    fileSystem.writeFile('notices.json', circularJSON.stringify(res));

    next();
}


app.listen(port, listening);

function listening() {

    console.log('Waiting on localhost:' + port);
}