const express = require("express");
const { BookingController } = require('../../controllers')

const router = express.Router();

router.get("/", BookingController.getBookings)

module.exports = router;