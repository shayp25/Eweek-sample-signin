const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const judgingSchema = new Schema({
  judgeName: { type: String, required: true },
  headcount: { type: Number, required: true },
  hostingOrg: { type: String, required: true },
  event: { type: String, required: true },
  eventLogistics: { type: Number, required: true },
  questionsAddressed: { type: Number, required: true },
  judgingIssues: { type: Number, required: true },
  eventGraphic: { type: Number, required: true },
  hostControl: { type: Number, required: true },
  creativity: { type: Number, required: true },
  participantEngagement: { type: Number, required: true },
  promptness: { type: Number, required: true },
  audienceEngagement: { type: Number, required: true },
  finalThoughts: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'Hosting Form',
});

const Judging = mongoose.model('Judging', judgingSchema);

module.exports = Judging;