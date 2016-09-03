const graphql = require('graphql'),
  queries = require('./queries'),
  mutations = require('./mutations');

// Create refs for GraphQL schema lazy creation
let refs = {};
[queries, mutations].forEach((schema) => {
  Object.keys(schema).forEach((key) => {
    refs[key] = schema[key](refs);
  });
});

const Schema = new graphql.GraphQLSchema({
  query: refs.rootQuery,
  //mutation: refs.rootMutation
});

module.exports = Schema;

