var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
const passportService = require('../services/passport');
const passport = require("passport");
/* GET home page. */
const jwt = require("jwt-simple");

const requireAuth = passport.authenticate('jwt', {session: false});


router.get('/', requireAuth,((req, res, next) => {
  knex('users').select().where({id: req.user.id}).first().then(function(user){
  res.json({message: 'secret path unlocked', username: `${user.username}`, id: `${user.id}`, email: `${user.email}`});
  })
}));

module.exports = router;
