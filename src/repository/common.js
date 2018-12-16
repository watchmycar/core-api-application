
class CommonRepository {
  constructor(model) {
    this.Model = model;
  }

  save(payload) {
    const model = new this.Model(payload);
    return model.save();
  }

  findOne(filter) {
    return this.Model.findOne(filter);
  }
}

module.exports = CommonRepository;
