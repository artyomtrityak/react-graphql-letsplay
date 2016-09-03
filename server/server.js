const graphql = require('graphql'),
      graphqlHTTP = require('express-graphql'),
      express = require('express'),
      cors = require('cors'),
      session = require('express-session'),
      graphqlSchema = require('./graphql-schema');

global.app = express();
global.app.use(cors());
global.app.use(session({
  secret: 'keyboard cat', //TODO: get from process.env.SECRET
  //store: TODO: use some store to store sessions. Redis?
  cookie: {maxAge: 60000},
  resave: false,
  saveUninitialized: false
}));

const formatError = (error) => ({
  message: error.message,
  locations: error.locations,
  stack: error.stack
});

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
