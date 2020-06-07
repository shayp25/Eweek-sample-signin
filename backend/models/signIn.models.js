const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const signInSchema = new Schema({
  eventCode: { type: String, required: true },
  eid: { type: String, required: true },
  year: { type: String, required: true },
  org: { type: String, required: true },
  event: { type: String, required: true },
  year: { type: String, required: true },
  major: { type: String, required: true },
  signingInOut: { type: String, required: true },
 
}, {
  timestamps: true,
});

const signIn = mongoose.model('SignIn', signInSchema);

module.exports = signIn;