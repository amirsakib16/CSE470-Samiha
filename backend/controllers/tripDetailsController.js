const TripDetails = require("../models/tripDetails");

// Get all trips created by a specific user
const getTripsByUserEmail = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const trips = await TripDetails.find({ userEmail });
    res.status(200).json(trips);
  } catch (error) {
    console.error("Error fetching user trips:", error);
    res.status(500).json({ message: "Failed to fetch trips." });
  }
};

module.exports = {
  getTripsByUserEmail,
};
