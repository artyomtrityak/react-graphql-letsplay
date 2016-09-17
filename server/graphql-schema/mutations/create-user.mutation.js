const { GraphQLString } = require('graphql'),
      jwt = require('jsonwebtoken'),
      config = require('../../shared/config');


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
    return global.app.get('model__user').createUser(args)
      .then((user) => {
        const expiresIn = 60 * 60 * 24 * 180, // 180 days
              token = jwt.sign(user, config.secret, { expiresIn });
        parent.response.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
        return user;
      });
  }
});