const { GraphQLObjectType } = require('graphql'),
      createPlayMutation = require('./create-play.mutation');


module.exports.rootMutation = (refs) => {
  return new GraphQLObjectType({
    name: 'rootMutation',
    fields: {
      createPlay: createPlayMutation(refs)
    }
  });
};
