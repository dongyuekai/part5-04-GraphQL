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
  type Query {
    foo: String
    count: Int
  }
`)
// 2 定义 schema 的 resolver
const rootValue = {
  foo() {
    return 'bar'
  },
  count() {
    return 123
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
