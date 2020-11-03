
const CommonRepository = require('@repositories/common')
const { User } = require('@models')

class UserRepository extends CommonRepository {
  constructor() {
    super(User)
  }
}

module.exports = new UserRepository()