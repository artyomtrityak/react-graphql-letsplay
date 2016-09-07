const graphql = require('graphql'),
  types = require('./types'),
  queries = require('./queries'),
  mutations = require('./mutations');

// Create refs for GraphQL schema lazy creation
let refs = {},
    typesSchemas = [];
[types, queries, mutations].forEach((schema, i) => {
  Object.keys(schema).forEach((key) => {
    const objectSchema = schema[key](refs);
    //Convention for ref objects to use their `name` attribute for runtime reference object
    refs[objectSchema.name] = objectSchema;

    //Push only types
    if (i === 0) {
      typesSchemas.push(objectSchema);
    }
  });
});

module.exports = new graphql.GraphQLSchema({
  query: refs.rootQuery,
  mutation: refs.rootMutation,
  types: typesSchemas
});
