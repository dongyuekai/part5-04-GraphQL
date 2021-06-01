// apollo-server-express使用

const express = require('express')

const { ApolloServer, gql } = require('apollo-server-express')

// 1 定义schema
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin'
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster'
  }
]

// 2 定义resolver
const resolvers = {
  // 所有 Query 的入口
  Query: {
    books: () => books
  }
}

const app = express()

const server = new ApolloServer({ typeDefs, resolvers })

// 将 Apollo-server 和 express 整合到一起
server.applyMiddleware({ app })

app.use((req, res) => {
  res.status(200)
  res.send('Hello!')
  res.end()
})

// 默认打开的端口是4000
app.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
})




