const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormSchema = new Schema({
  title: String,
  questions: [{
    questionText: String,
    questionType: String,
    options: [String]
  }]
});

module.exports = mongoose.model('Form', FormSchema);
