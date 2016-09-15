module.exports.getUsers = function getUsers (options) {
  options = Object.assign({}, options);

  return global.app.get('db').select('id', 'email', 'verified')
    .table('users')
    .offset(0)
    .limit(options.first);
};


function getUser (options) {
  return global.app.get('db').select('id', 'email', 'verified')
    .table('users')
    .where('id', options.id)
    .then((users) => {
      return users[0];
    });
}
module.exports.getUser = getUser;


module.exports.createUser = function createUser (options) {
  return global.app.get('db')
    .into('users')
    .returning('id')
    .insert({email: options.email})
    .then((params) => {
      return getUser({id: params[0]});
    });
};


module.exports.getUserFromToken = function getUserFromToken (options) {
  return {
    id: 1,
    name: 'Toekn user name'
  };
};

