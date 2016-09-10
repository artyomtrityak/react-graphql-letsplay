const { GraphQLObjectType } = require('graphql'),
      createUserMutation = require('./create-user.mutation'),
      createPlayMutation = require('./create-play.mutation');


module.exports.rootMutation = (refs) => {
  return new GraphQLObjectType({
    name: 'rootMutation',
    fields: {
      createPlay: createPlayMutation(refs),
      createUser: createUserMutation(refs)
    }
  });
};
