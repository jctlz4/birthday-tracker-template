const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const birthdaySchema = new Schema({
  userName: { type: String, required: true },
  cohort_number: { type: String, required: true },
  month: { type: String, required: true },
  date: { type: String, required: true }
});

module.exports = mongoose.model('Birthday', birthdaySchema);
