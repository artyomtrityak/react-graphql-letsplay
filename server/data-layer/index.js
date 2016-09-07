const knexFactory = require('knex');


module.exports.connect = function connect() {
  const db = knexFactory({
    debug: process.env.NODE_ENV !== 'production',
    client: 'sqlite3',
    connection: {
      filename: './letsplay.sqlite'
    }
  });

  global.app.set('db', db);
  global.app.set('model__users', require('./users.model'));
  global.app.set('model__plays', require('./plays.model'));

  return db;
};