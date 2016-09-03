const graphql = require('graphql');


module.exports.rootMutation = (refs) => {
  return new graphql.GraphQLObjectType({
    name: 'RootMutation',
    fields: {
    }
  });
};