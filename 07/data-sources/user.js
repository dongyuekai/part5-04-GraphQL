const { MongoDataSource } = require('apollo-datasource-mongodb')

class Users extends MongoDataSource {
  getUser(userId) {
    return this.findOneById(userId)
  }
  getUsers() {
    return this.model.find()
  }
}
module.exports = Users
