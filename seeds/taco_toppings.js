
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('taco_toppings').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('taco_toppings').insert({name: 'salsa', price_in_cents: 50}),
        knex('taco_toppings').insert({name: 'gauc', price_in_cents: 75}),
        knex('taco_toppings').insert({name: 'cheese', price_in_cents: 25})
      ]);
    });
};
