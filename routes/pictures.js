var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */


router.get('/',((req, res) => {
  knex('pictures').select().then(function(pics){
    res.json(pics);
});
}));

router.get('/:id', ((req, res) => {
  knex('pictures').select().where({id: req.params.id}).first().then(pics =>{
    res.json(pics);
  })
}))
module.exports = router;
