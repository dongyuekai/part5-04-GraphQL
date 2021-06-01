const mongoose = require('mongoose')
const { dbUri } = require('../config/config.default.js')

// 连接mongodb数据库
mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
const db = mongoose.connection

// 连接失败
db.on('error', err => {
  console.log('MongoDB 数据库连接失败', err)
})
// 连接成功
db.once('open', () => {
  console.log('MongoDB 数据库连接成功')
})
// 导出模型类
module.exports = {
  User: mongoose.model('User', require('./user')),
  Article: mongoose.model('Article', require('./article'))
}