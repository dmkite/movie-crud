
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        { id: 1, title: 'No Country For Old Men', director: 'Ethan and Joel Coen', year: 2007, rating: 4.5, poster_url: 'https://images-na.ssl-images-amazon.com/images/I/41eVqtpRMcL.jpg'},
        { id: 2, title: 'Hereditary', director: 'Ari Aster', year: 2018, rating: 4, poster_url: 'https://images-na.ssl-images-amazon.com/images/I/91lJZ56mRHL._SY606_.jpg'},
      ]);
    });
};
