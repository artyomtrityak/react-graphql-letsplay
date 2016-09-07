module.exports.getPlays = function getPlays (options) {
  options = Object.assign({}, options);

  return global.app.get('db').select(
    'id', 'name', 'description', 'author', 'bgg_game_id', 'players_limit', 'starts_at', 'address'
  )
    .table('plays')
    .offset(0)
    .limit(options.first);
};


module.exports.getPlay = function getPlay (options) {
  return global.app.get('db').select(
    'id', 'name', 'description', 'author', 'bgg_game_id', 'players_limit', 'starts_at', 'address'
  )
    .table('plays')
    .where('id', options.id)
    .then((users) => {
      return users[0];
    });
};


module.exports.createPlay = function createPlay (options) {
  return global.app.get('db')
    .into('plays')
    .returning('id')
    .insert({
      name: options.name,
      author: options.author
    })
    .then((params) => {
      return getPlay({id: params[0]});
    });
};
