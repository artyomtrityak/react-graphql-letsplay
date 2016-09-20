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
      db = require('./db'),
      devtools = require('./shared/devtools'),
      config = require('./shared/config'),
      AuthService = require('./auth');


//Initializing Express app
global.app = express();
global.app.use(cors());
global.app.use(cookieParser());

//Parsing body except /graphql endpoint
global.app.use(/\/((?!graphql).)*/, bodyParser.urlencoded({ extended: true }));
global.app.use(/\/((?!graphql).)*/, bodyParser.json());

global.app.use(session({
  secret: config.secret,
  cookie: {maxAge: 60000},
  resave: false,
  saveUninitialized: false
}));

//Parsing id_token and transforming it into req.user
global.app.use(expressJwt({
  secret: config.secret,
  credentialsRequired: false,
  getToken: (req) => {
    return req.cookies.id_token;
  } 
}));
global.app.use(passport.initialize());


//Initialize database connectons
db.connect();


//Auth
global.app.post(
  '/login',
  passport.authenticate('local', {failureRedirect: '/login', session: false}),
  AuthService.onSuccessfullAuth
);
global.app.post('/verifypassword', AuthService.verifyPassword);

//Initialize GraphQL
global.app.use('/graphql', graphqlHTTP((req, resp) => {
  return {
    schema: graphqlSchema,
    pretty: config.isDevMode,
    rootValue: {
      req: req,
      resp: resp
    },
    formatError: devtools.formatError
  };
}));

global.app.listen(5000);
console.log('Server running on http://localhost:5000');
