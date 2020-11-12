const { Model } = require('objection')

export class User extends Model {
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
        googleId: { type: 'string'},
        terminalId: { type: 'string'},
      }
    }
  }
}
