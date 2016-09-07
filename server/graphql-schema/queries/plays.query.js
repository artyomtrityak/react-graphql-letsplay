const { GraphQLList, GraphQLInt, GraphQLNonNull } = require('graphql');


module.exports = (refs) => {
  return {
    type: new GraphQLList(refs.playType),
    args: {
      first: {
        type: new GraphQLNonNull(GraphQLInt)
      },
      skip: {
        type: new GraphQLNonNull(GraphQLInt)
      }
    },
    resolve: (user, args, root) => {
      console.log('get plays: ', user, args, root);
      global.app.get('model__plays').getPlays(args);

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
