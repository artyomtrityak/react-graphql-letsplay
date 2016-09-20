const _ = require('lodash'),
      utils = require('../shared/utils');

function getUsers (options) {
  options = Object.assign({}, options);

  return global.app.get('db').select('id', 'email', 'verified')
    .table('users')
    .offset(0)
    .limit(options.first);
}
module.exports.getUsers = getUsers;


function getUser (options) {
  return global.app.get('db').select('id', 'email', 'verified')
    .table('users')
    .where(_.pickBy({
      id: options.id,
      email: options.email
    }))
    .then((users) => {
      return users[0];
    });
}
module.exports.getUser = getUser;


function createUser (options) {
  const salt = utils.genRandomString(16);
  const saltedPassword = utils.saltPassword(options.password, salt);

  return global.app.get('db')
    .into('users')
    .returning(['id', 'email', 'name'])
    .insert({
      email: options.email,
      pass_salt: salt,
      password_salted: saltedPassword,
      name: options.name
    })
    .then((params) => {
      return getUser({id: params[0]});
    }).then((user) => {
      delete user.password_salted;
      delete user.salt;

      return user;
    });
}
module.exports.createUser = createUser;


function loginUser ({email, password}) {
  return global.app.get('db').select('id', 'email', 'verified', 'pass_salt', 'password_salted')
    .table('users')
    .where({email})
    .then((users) => {
      return users[0];
    })
    .then((user) => {
      const passwordSaltedInput = utils.saltPassword(password, user.pass_salt);
      if (passwordSaltedInput === user.password_salted) {
        delete user.pass_salt;
        delete user.password_salted;

        return user;
      }
      return {error: 'LOGIN_ERROR'};
    });
}
module.exports.loginUser = loginUser;

