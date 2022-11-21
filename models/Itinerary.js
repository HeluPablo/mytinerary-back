const mongoose = require("mongoose");

const itinerarySchema = mongoose.Schema({
  cityId: { type: String, required: true },
  name: { type: String, required: true },
  photo: [{ type: String, required: true }],
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  userId: { type: mongoose.Types.ObjectId, ref: "users", required: true },
});

const Itinerary = mongoose.model("itineraries", itinerarySchema);
module.exports = Itinerary;
