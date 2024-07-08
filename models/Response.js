const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
  formId: { type: Schema.Types.ObjectId, ref: 'Form' },
  responses: [Schema.Types.Mixed]
});

module.exports = mongoose.model('Response', ResponseSchema);
