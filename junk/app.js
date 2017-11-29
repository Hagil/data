console.log('rolling..');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
// routes
app.get('/', get_everything);
app.post('/', get_post);

app.listen(3500, listening);

function get_post(request, response){
    console.log(request.body);
    var person = request.body;
    response.render('thanks', person);
}
function get_everything(request, response){
    console.log(request.query);
response.render('index');

}
function listening (){
    console.log('listening on localhost: 3500');
}
