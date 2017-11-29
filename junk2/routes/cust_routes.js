var router = require('express').Router();
router.get('/customer', do_customer_stuff);
module.exports = router;
var person = {name: 'hagil',
age: 34,
job: 'coding'
};





function do_customer_stuff(req, res) {
    res.render('customer', person);
}