var express = require('express');
var knex = require('../db/knex');
var bcrypt = require('bcrypt');
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
//setup options for jwt strat

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};



const localOptions = {usernameField: 'email'};
localLogin = new LocalStrategy(localOptions, function(email, password, done){
  knex('users').where({email}).first()
  .then((user) => {
    if(!user) return done(null, false);
    else {
      bcrypt.compare(password, user.password, function(err, isMatch){
        if(!isMatch){console.log("passwords must match"); return done(null, false);}
        else {
          return done(null, user);
        }
      })
      }
    })
  })

//create jwt strat
const jwtLogin = new JwtStrategy(jwtOptions,(payload, done) => {
  knex('users').where({id: payload.id}).first()
  .then((user)=>{
      return done(null, user);
  })
});

//tell passport to use this strat
passport.use(jwtLogin);
passport.use(localLogin);
