const { GraphQLList, GraphQLInt, GraphQLString, GraphQLNonNull } = require('graphql');


module.exports = (refs) => {
  return {
    type: refs.userType,
    args: {
      token: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: (params, args, root) => {
      return global.app.get('model__user').getUser({email: params.req.user.email});
    }
  };
};
