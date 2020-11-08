
const CommonRepository = require('../common')
const { User } = require('../../models')

class UserRepository extends CommonRepository {
  constructor() {
    super(User)
  }
}

module.exports = new UserRepository()