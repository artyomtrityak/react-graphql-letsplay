const { GraphQLList, GraphQLInt } = require('graphql');


module.exports = (refs) => {
  return {
    type: refs.userType,
    resolve: () => {
      //Logged in user
      return {
        id: 1,
        name: 'test'
      };
    }
  };
};
