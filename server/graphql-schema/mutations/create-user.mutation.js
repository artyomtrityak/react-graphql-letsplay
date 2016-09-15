const { GraphQLString } = require('graphql'),
      jwt = require('jsonwebtoken');


module.exports = (refs) => ({
  type: refs.userType,
  args: {
    email: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    }
  },
  resolve: (parent, args, root) => {
    return global.app.get('model__users').createUser(args)
      .then((user) => {
        //TODO: move to some shared to reuse from auth
        const expiresIn = 60 * 60 * 24 * 180, // 180 days
        token = jwt.sign(user, 'my secret', { expiresIn });
        parent.response.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
        return user;
      });
  }
});