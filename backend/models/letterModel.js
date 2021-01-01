const Mongoose = require('mongoose');

const letterSchema = new Mongoose.Schema({
  to: { type: String, required: true },
  from: { type: String, required: true },
  message: { type: String, required: true },
  passcode: { type: String, required: true, unique: true },
});

const letterModel = Mongoose.model('Letter', letterSchema);

module.exports = letterModel;
