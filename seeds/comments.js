
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {commentscontent: `ready to get sendy off the palasade this winter?`, user_id:'1', post_id:'1'},
        {commentscontent: `lol deez tr0llz`, user_id:'2', post_id:'1'},
        {commentscontent: `hahah classic Ted, such a donk.`, user_id:'3', post_id:'1'}
      ]);
    });
};
