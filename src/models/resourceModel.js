const mongoose = require('mongoose');

const { Schema } = mongoose;
let resourceModel;

const ResourceSchema = new Schema({
  _id: {
    type: String,
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
  collection: 'Resource',
  versionKey: false,
});

try {
  resourceModel = mongoose.model('Resource', ResourceSchema);
} catch (error) {
  resourceModel = mongoose.model('Resource');
}

module.exports = resourceModel;
