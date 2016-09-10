const graphql = require('graphql'),
      graphqlHTTP = require('express-graphql'),
      passport = require('passport'),
      express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      cookieParser = require('cookie-parser'),
      graphqlSchema = require('./graphql-schema'),
      dataLayer = require('./data-layer'),

      //Should be required to unsure strategies registration
      AuthService = require('./auth');

global.app = express();
global.app.use(cors());
global.app.use(cookieParser());
global.app.use(bodyParser.urlencoded({ extended: true }) );
global.app.use(session({
  secret: 'keyboard cat', //TODO: get from process.env.SECRET
  //store: TODO: use some store to store sessions. Redis?
  cookie: {maxAge: 60000},
  resave: false,
  saveUninitialized: false
}));

dataLayer.connect();

const formatError = (error) => ({
  message: error.message,
  locations: error.locations,
  stack: error.stack
});

global.app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

global.app
  .use('/graphql', graphqlHTTP((request) => ({
    schema: graphqlSchema,
    pretty: true,
    rootValue: {
      session: request.session
    },
    formatError: formatError
  })))
  .listen(5000);

console.log('GraphQL server running on http://localhost:5000/graphql');
