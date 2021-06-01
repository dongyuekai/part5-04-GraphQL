const { makeExecutableSchema } = require('apollo-server-express')
const typeDefs = require('./type-defs')
const resolvers = require('./resolvers')

// 合并
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
module.exports = schema
