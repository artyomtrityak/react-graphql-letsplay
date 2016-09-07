const { GraphQLString } = require('graphql');


module.exports = (refs) => ({
  type: refs.userType,
  args: {
    email: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    }
  },
  resolve: (parent, args, root) => {
    return global.app.get('model__user').createUser(args);
  }
});