const { GraphQLList, GraphQLInt, GraphQLString, GraphQLNonNull } = require('graphql');


module.exports = (refs) => {
  return {
    type: refs.userType,
    args: {
      token: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: (req, args, root) => {
      console.log('get viewer: ', req);
      return global.app.get('model__user').getUserFromToken(args);
    }
  };
};
