module.exports.getUsers = function getUsers (options) {
  options = Object.assign({}, options);

  return global.app.get('db').select('id', 'email', 'verified')
    .table('users')
    .offset(0)
    .limit(options.first);
};


module.exports.getUser = function getUser (options) {
  return global.app.get('db').select('id', 'email', 'verified', 'details', '__type')
    .table('users')
    .where('id', options.id)
    .then((users) => {
      return users[0];
    });
};


module.exports.createUser = function createUser (options) {
  return global.app.get('db')
    .into('users')
    .returning('id')
    .insert({email: options.email})
    .then((params) => {
      return getUser({id: params[0]});
    });
};
