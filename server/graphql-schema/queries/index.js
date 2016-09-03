const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

module.exports.rootQuery = (refs) => {
  const testType = new GraphQLObjectType({
    name: 'test',
    description: 'test.',
    fields: () => ({
      id: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'The id of test.'
      },
      server: {
        type: GraphQLString,
        description: 'The id of test.'
      }
    })
  });


  return new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      
      viewer: {
        type: testType,
        resolve: () => {
          //Root server information: version etc
          return {
            server: '1'
          };
        }
      }
    }
  });
};