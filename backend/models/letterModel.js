const Mongoose = require('mongoose');

const letterSchema = new Mongoose.Schema({
  to: { type: String, required: true },
  from: { type: String, required: true },
  message: { type: String, required: true },
  passcode: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now() },
});

const letterModel = Mongoose.model('Letter', letterSchema);

module.exports = letterModel;
