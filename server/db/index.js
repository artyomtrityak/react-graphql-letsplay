const knexFactory = require('knex');


module.exports.connect = function connect() {
  const db = knexFactory({
    debug: process.env.NODE_ENV !== 'production',
    client: 'sqlite3',
    connection: {
      filename: './letsplay.sqlite'
    },
    useNullAsDefault: true
  });

  global.app.set('db', db);
  global.app.set('model__user', require('./users.model'));
  global.app.set('model__play', require('./plays.model'));

  return db;
};