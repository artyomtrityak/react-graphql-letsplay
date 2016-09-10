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
      //console.log('get viewer: ', args);
      return global.app.get('model__users').getUserFromToken(args);
    }
  };
};
