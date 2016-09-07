const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLInt } = require('graphql');

module.exports.rootQuery = (refs) => {
  return new GraphQLObjectType({
    name: 'rootQuery',
    fields: {
      viewer: require('./viewer.query')(refs),
      plays: require('./plays.query')(refs),
      users: require('./users.query')(refs)
    }
  });
};
