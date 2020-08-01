const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placementSchema = new Schema({
  judgeName: { type: String, required: true },
  hostingOrg: { type: String, required: true },
  event: { type: String, required: true },

  large1: { type: String, required: true },
  large2: { type: String, required: true },
  large3: { type: String, required: true },
  large4: { type: String, required: true },
  large5: { type: String, required: true },
  largeParticipated: { type: [String], required: true },
  
  small1: { type: String, required: true },
  small2: { type: String, required: true },
  small3: { type: String, required: true },
  small4: { type: String, required: true },
  small5: { type: String, required: true },
  smallParticipated: { type:[String], required: true }
}, {
  timestamps: true,
  collection: 'Placement Forms',
});

const Placement = mongoose.model('Placement', placementSchema);

module.exports = Placement;