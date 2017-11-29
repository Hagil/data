var router = require('express').Router();

router.get('/', do_homepage);
router.post('/do_user', handle_form);

module.exports = router

function do_homepage(req, res){
    console.log('doing home page');
    res.render('index');
}

function handle_form(req, res){
    console.log('handling form');
    console.log(req.body);
 res.render('thanks', req.body);
}