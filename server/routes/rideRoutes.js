const express = require("express");
const router = express.Router();
const rideController = require("../controllers/rideController");

router.post("/book", rideController.bookRide);

router.put("/:id", rideController.updateRide);

router.delete("/:id", rideController.cancelRide);

module.exports = router;