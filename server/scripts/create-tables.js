global.app = require('express')();

const db = require('../db').connect();

db.schema.createTableIfNotExists('users', (t) => {
  t.increments('id').primary();
  t.string('email', 127).unique();
  t.string('name', 127);
  t.string('pass_salt', 32);
  t.string('password_salted', 32);
  t.boolean('verified').defaultTo(false);
  //t.json('details');
})
.then(() => {
  console.log('Users table was created successfully.\n\n\n');

  return db.schema.createTableIfNotExists('plays', (t) => {
    t.increments('id').primary();
    t.string('name', 127);
    t.text('description');
    t.integer('author').unsigned().notNullable().references('id').inTable('users');
    t.integer('bgg_game_id');
    t.integer('players_limit');
    t.dateTime('starts_at');
    t.string('address', 127);
    //t.json('details');
  });
})
.then(() => {
  console.log('Plays table was created successfully.\n\n\n');

  process.exit(0);
});
