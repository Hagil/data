var express = require('express');
var app = express();
var port = 3500;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.listen(port, listening);

function listening (){
    console.log(port + ' is the magic port');
}
// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    console.log('inside_get_for_route');
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
});

// about page 
app.get('/about', function(req, res) {
    console.log('inside_about');
    res.render('pages/about');
});

app.get('/contact', function(req, res) {
    console.log('inside_contact');
    res.render('pages/contact');
});