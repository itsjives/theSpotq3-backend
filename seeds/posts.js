
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {content: `such a fun place`, picture_id: '1', user_id: '2'},
        {content: `PSHH u don't know Elon, photoshop!`, picture_id: '2', user_id: '3'},
        {content: `Karen got roasted by the sun. lol (lobster emoji)`, picture_id: '3', user_id: '1'}
      ]);
    });
};
