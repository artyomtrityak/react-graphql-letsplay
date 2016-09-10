const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy((username, password, done) => {
  console.log('Loggin in with ', username, password);
  done(null, {username: 'Artyom', token: '123'});
}));

