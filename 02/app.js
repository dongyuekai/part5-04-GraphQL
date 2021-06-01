// graphql结合express服务 
const { graphql, buildSchema } = require('graphql')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')

const app = express()

// 允许跨域
app.use(cors())

// 1 使用 GraphQL schema 语法构建一个 schema
const schema = buildSchema(`
  type Score {
    name: String
    score: Float
  }
  type User {
    name: String
    age: Int
    hobbies: [String]
    scores: [Score]
  }
  type Article {
    title: String
    body: String
    author: User
  }
  type Query {
    # xx! 表示不能为空类型
    foo: String!  
    count: Int
    salary: Float
    isGood: Boolean
    userId: ID
    user: User
    article: Article
  }
`)
// 2 定义 schema 的 resolver
const rootValue = {
  foo() {
    return 'bar'
  },
  count() {
    return '12'
  },
  salary() {
    return 123.123
  },
  isGood() {
    return true
  },
  userId() {
    return '123'
  },
  user() {
    return {
      name: 'dyk',
      age: 33,
      hobbies: ['吃饭', '篮球'],
      scores: [
        { name: 'score1', score: 89.8 },
        { name: 'score2', score: 19.8 },
      ]
    }
  },
  article() {
    return {
      title: 'title1',
      body: 'body1',
      author: {
        name: 'name1',
        age: 333
      }
    }
  }
}
// 3 挂载graphql中间件
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true  // 开启浏览器Graphql IDE 调试工具
}))
// 4 启动web服务
app.listen(4000, () => {
  console.log('GraphQL Server is running at http://localhost:4000')
})
