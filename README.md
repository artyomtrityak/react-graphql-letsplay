#Let's Play

##Backend
GraphQL, node.js, express, knex (PostgreSQL)

##Frontend
React, webpack, stylelint, flowtype


##Shortcuts

Graphql Create user 
`curl -XPOST -H 'Content-Type:application/graphql' -d 'mutation rootMutation { createUser(email: "art.art@com", password: "test") { id,email } }' http://localhost:5000/graphql`