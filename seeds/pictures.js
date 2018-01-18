
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pictures').del()
    .then(function () {
      // Inserts seed entries
      return knex('pictures').insert([
        {image: 'http://www.westallrealestate.com/wp-content/uploads/2013/02/Fotosearch_k13852195.jpg', user_id:'1', title: `Lake Tahoe`, description:`Got to jive with lake and do an awesome float down truckee river.`  },
        {image: 'http://lh3.googleusercontent.com/-v_KXTO-bIqU/UqHtuQzFuNI/AAAAAAAASBA/Ot2wyn3SRwk/s1600/Northern+Lights.jpg', user_id:'2', title: `X1-5`, description:`We found this awesome place to relax on saturns moon X1-5. Shout out to my boy, Elon! for making this trip possible. `  },
        {image: 'https://www-tc.pbs.org/wgbh/nova/assets/img/full-size/explore-ancient-egypt-merl.jpg', user_id:'3', title: `Egypt!`, description:`Oh man, Ted is wild, taking the camel out there.  I took the ATV, way more fun. `  }
      ]);
    });
};
