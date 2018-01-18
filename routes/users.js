var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');
const jwt = require("jwt-simple");
const config = require('../config');
const passportService = require('../services/passport');
const passport = require("passport");
/* GET home page. */
const requireAuth = passport.authenticate('jwt', {session: false});

var token;
var payload;

function tokenForUser(user){
  const timestamp = new Date().getTime()
}

const requireSignin = passport.authenticate('local', {session:false});

// router.get('/',((req, res) => {
//   knex('users').select().then(function(users){
//     res.json({message: "secret path awaits"});
// });
// }));
router.get('/dashboard', requireAuth,((req, res, next) => {
  knex('users').select().where({id: req.user.id}).first().then(function(user){
  console.log('user');
  res.json({message: 'secret path unlocked', username: `${user.username}`, id: `${user.id}`, email: `${user.email}`});
  })
}));

router.post('/signin', requireSignin, function(req, res){
  payload = {id: req.user.id};
  token = jwt.encode(payload, config.secret);
  res.json({token:token});

})

router.post('/signup', function(req, res, next){
          knex('users').select().where({email: req.body.email, username: req.body.username}).first().then(existingUser => {
          if (!existingUser && req.body.password === req.body.confirm){
          bcrypt.hash(req.body.password, 8, function(err, hash){
          knex.raw(`insert into users (username, password, email ) values ('${req.body.username}', '${hash}', '${req.body.email}' ) RETURNING *;`)
          .then(function(newuser){
              payload = {id: newuser.rows[0].id};
              token = jwt.encode(payload, config.secret);
              res.json({token:token});
            })
          })
        } else {
            if (existingUser.username === req.body.username && existingUser.email === req.body.email){
               res.json({error: "both username and email taken", userData: existingUser});
          } else if (existingUser.email === req.body.email){
             res.json({error: "email taken", userData: existingUser.email});
          } else if(existingUser.username === req.body.username ) {
              res.json({error: "username taken", userData: existingUser.username})
          }
        }
    })
})


// knex('users').select().where({email: req.body.email, username: req.body.username}).first().then(existingUser => {



module.exports = router;
