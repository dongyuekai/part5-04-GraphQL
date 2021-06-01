const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    foo: String 
  }
`
module.exports = typeDefs
