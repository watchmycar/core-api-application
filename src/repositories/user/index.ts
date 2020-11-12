
import { User } from '@models/index'
import { CommonRepository } from '@repositories/common'

class UserRepository extends CommonRepository {
  constructor() {
    super(User)
  }
}

export const userRepository = new UserRepository()
