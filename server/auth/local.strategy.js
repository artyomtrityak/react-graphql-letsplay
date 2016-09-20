const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  jwt = require('jsonwebtoken');


passport.use(new LocalStrategy((email, password, done) => {
  global.app.get('model__user').loginUser({email, password})
  .then((user) => {
    if (user.error) {
      done(user.error);
    } else {
      done(null, user);
    }
  });
}));