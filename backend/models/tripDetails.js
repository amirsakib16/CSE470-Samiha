const mongoose = require("mongoose");

const tripDetailsSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  destination: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  budget: { type: Number, required: true },
  description: { type: String, required: true },
});

const TripDetails = mongoose.model("TripDetails", tripDetailsSchema);
module.exports = TripDetails;
