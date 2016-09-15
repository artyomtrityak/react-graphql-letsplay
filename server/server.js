const graphql = require('graphql'),
      graphqlHTTP = require('express-graphql'),
      passport = require('passport'),
      express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      cookieParser = require('cookie-parser'),
      expressJwt = require('express-jwt'),
      jwt = require('jsonwebtoken'),
      graphqlSchema = require('./graphql-schema'),
      dataLayer = require('./data-layer'),
      devtools = require('./utils/devtools'),
      AuthService = require('./auth');


//Initializing Express app
global.app = express();
global.app.use(cors());
global.app.use(cookieParser());
//global.app.use(bodyParser.urlencoded({extended: true}));
//global.app.use(bodyParser.json());
global.app.use(session({
  secret: 'keyboard cat',
  cookie: {maxAge: 60000},
  resave: false,
  saveUninitialized: false
}));
global.app.use(expressJwt({
  secret: 'my secret',
  credentialsRequired: false,
  getToken: (req) => {
    console.log('GET TOCKEN1;', req.cookies.id_token);
    return req.cookies.id_token;
  } 
}));
global.app.use(passport.initialize());


//Initialize database connectons
dataLayer.connect();


//Initialize Auth
global.app.post(
  '/login',
  passport.authenticate('local', {failureRedirect: '/login', session: false}),
  AuthService.onSuccessfullAuth
);


//Initialize GraphQL
global.app.use('/graphql', graphqlHTTP((req, resp) => ({
  schema: graphqlSchema,
  pretty: process.env.NODE_ENV !== 'production',
  rootValue: {
    request: req,
    response: resp
  },
  formatError: devtools.formatError
})));

global.app.listen(5000);
console.log('Server running on http://localhost:5000');
