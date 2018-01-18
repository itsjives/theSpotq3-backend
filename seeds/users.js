var bcrypt = require('bcrypt');
const saltRounds = 7;

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'test', password:`${bcrypt.hashSync('test', saltRounds)}`, email:'test@gmail.com' },
        {username: 'rick', password:`${bcrypt.hashSync('rick', saltRounds)}`, email:'rick@mail.com' },
        {username: 'sasha', password:`${bcrypt.hashSync('sasha', saltRounds)}`, email:'sasha@fudge.com' }
      ]);
    });
};
