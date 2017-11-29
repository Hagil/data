var mongoose = require('mongoose');
mongoose.Promise = global.Promise; // fixes mongoose weird no-promise-support error
var mongoport = 27017;
var db = 'hagil_tasks';
var url = 'mongodb://localhost:' + mongoport + '/' + db;

mongoose.connect(url, {useMongoClient: true});

// TODO - sort date out in schema to be an actual date!
var schema = new mongoose.Schema({
    task: String,
    date: String
})

// this class will create a collections called 'tasks' using the above schema design
var TASKCLASS = mongoose.model('tasks', schema);

module.exports = TASKCLASS;

