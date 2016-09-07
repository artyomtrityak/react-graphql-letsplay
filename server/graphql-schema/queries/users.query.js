const { GraphQLList, GraphQLInt } = require('graphql');


module.exports = (refs) => {
  return {
    type: new GraphQLList(refs.playType),
    args: {
      first: {
        type: GraphQLInt
      },
      skip: {
        type: GraphQLInt
      }
    },
    resolve: (user, args, root) => {
      console.log('get users: ', user, args, root);
      global.app.get('data-layer__users').getUsers(args);

      return [{
        id: 1,
        name: 'Arkham Horror'
      }, {
        id: 2,
        name: 'Dune'
      }];
    }
  };
};
