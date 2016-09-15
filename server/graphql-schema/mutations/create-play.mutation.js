const { GraphQLInt, GraphQLString } = require('graphql');


module.exports = (refs) => ({
  type: refs.playType,
  args: {
    author: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    }
  },
  resolve: (parent, args, root) => {
    return global.app.get('model__plays').createPlay(args);
  }
});
