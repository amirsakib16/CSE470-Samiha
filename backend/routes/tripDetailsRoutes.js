// routes/tripDetailsRoutes.js
const express = require("express");
const router = express.Router();
const { getTripDetailsByUser } = require("../controllers/tripDetailsController");

router.get("/user/:email", getTripDetailsByUser);

module.exports = router;
