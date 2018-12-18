const mongoose = require('mongoose');

const { Schema } = mongoose;
let userModel;

const UserSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String
  },
  email: {
    type: String,
    sparse: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  terminalId: {
    type: String,
    unique: true,
    required: true,
  },
  _created_at: {
    type: Date,
    default: Date.now,
  },
  _updated_at: {
    type: Date,
    default: Date.now,
  },
}, {
  collection: 'User',
  versionKey: false,
});

try {
  userModel = mongoose.model('User', UserSchema);
} catch (error) {
  userModel = mongoose.model('User');
}

module.exports = userModel;
