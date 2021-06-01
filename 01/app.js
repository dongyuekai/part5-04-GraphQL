const { graphql, buildSchema } = require('graphql')

// 1 使用GraphQL schema语法构建一个schema
const schema = buildSchema(`
  type Query {
    hello: String
    count: Int
  }
`)

// 2 定义schema的resolver
const root = {
  hello: () => 'Hello world',
  count: () => 1
}

// 3 查询
graphql(schema, '{ hello, count }', root).then(response => {
  console.log(response)
})

