
class CommonRepository {
  constructor(model) {
    this.Model = model
  }

  save(payload) {
    return this.Model.query().insert(payload)
  }
}

module.exports = CommonRepository
