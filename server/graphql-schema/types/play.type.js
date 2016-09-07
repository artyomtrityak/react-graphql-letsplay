const { GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');


module.exports = (refs) => {
  return new GraphQLObjectType({
    name: 'playType',
    //interfaces: [refs.nodeInterface],

    fields: () => ({
      id: {
        type: new GraphQLNonNull(GraphQLString)
      },

      name: {
        type: GraphQLString
      },

      author: {
        type: refs.userType,
        resolve: (user, args, root) => {
          return {
            id: 1,
            name: 'Artyom'
          };
        }
      }
    })
  });
};
