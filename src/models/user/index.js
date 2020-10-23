const { Model } = require('objection')

class User extends Model {
  static get tableName() {
    return 'users'
  }
  
  // schema validation
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email', 'terminalId'],
      properties: {
        id: { type: 'integer' },
        email: { type: 'string'},
        password: { type: 'string'},
        terminalKey: { type: 'string'},
      }
    }
  }
}

module.exports = User