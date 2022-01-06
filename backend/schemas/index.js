var { GraphQLSchema, GraphQLObjectType } = require('graphql')
const UserQuery = require('../graphql/user/query')
const UserMutation = require('../graphql/user/mutation')
const AuthMutation = require('../graphql/auth/mutation')

// Define the Query type
var Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
      ...UserQuery
    }
  });

  var Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...AuthMutation,
        ...UserMutation
    }
  });

let schema = new GraphQLSchema(
    {
        query: Query,
        mutation: Mutation
    }
)

module.exports = schema