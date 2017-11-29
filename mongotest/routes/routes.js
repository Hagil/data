var router = require('express').Router();
var data = require('../db/data');

module.exports = router;

router.get('/', get_home);

function get_home(req, res){
    res.render('pages/index', {data});
}