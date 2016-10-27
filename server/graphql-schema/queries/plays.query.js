const { GraphQLList, GraphQLInt, GraphQLNonNull, GraphQLString } = require('graphql');


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
    resolve: (req, args, root) => {
      //global.app.get('model__plays').getPlays(args);

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
