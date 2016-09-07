const { GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');


module.exports = (refs) => {
  return new GraphQLObjectType({
    name: 'userType',
    //interfaces: [refs.nodeInterface],

    fields: () => ({
      id: {
        type: new GraphQLNonNull(GraphQLString)
      },

      name: {
        type: GraphQLString
      },

      friends: {
        type: new GraphQLList(refs.userType),
        resolve: (user, args, root) => {
          return [{
            id: 1,
            name: 'Artyom'
          }, {
            id: 2,
            name: 'Petro'
          }];
          //return global.app.get('model__user').getUser({id: user.id});
        }
      },

      myPlays: {
        type: new GraphQLList(refs.playType),
        resolve: (user, args, root) => {
          return [{
            id: 1,
            name: 'Arkham Horror'
          }, {
            id: 2,
            name: 'Dune'
          }];
        }
      }
    })
  });
};
