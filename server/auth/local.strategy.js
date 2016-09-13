const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  jwt = require('jsonwebtoken');


passport.use(new LocalStrategy((username, password, done) => {
  console.log('Loggin in with ', username, password);
  done(null, {username: 'Artyom', id: 2});
}));