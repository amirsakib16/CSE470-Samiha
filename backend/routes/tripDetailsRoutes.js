const express = require("express");
const router = express.Router();
const { getTripsByUserEmail } = require("../controllers/tripDetailsController");

// GET trips by user email
router.get("/user/:email", getTripsByUserEmail);

module.exports = router;
