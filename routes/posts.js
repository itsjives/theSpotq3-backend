var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
const passportService = require('../services/passport');
const passport = require("passport");
/* GET home page. */
const jwt = require("jwt-simple");

const requireAuth = passport.authenticate('jwt', {session: false});

router.get('/:id',((req, res) => {
  knex('users').select('users.username', 'users.id as u_id', 'posts.id', 'posts.content', 'posts.created_at').from('users').rightOuterJoin('posts', 'posts.user_id', 'users.id')
  .where({picture_id: req.params.id})
  .then(user => {
    res.json(user);
});
}));

router.post('/new', ((req, res) => {
  knex('posts').insert([{content: req.body.content, user_id: req.body.user_id, picture_id: req.body.picture_id}])
  .then(post => {
    res.json(post)
    })
  }))


module.exports = router;
