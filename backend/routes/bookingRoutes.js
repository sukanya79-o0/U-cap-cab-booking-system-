const express = require('express');
const router = express.Router();
const bookingCtrl = require('../controllers/bookingController');
const auth = require('../middlewares/authMiddleware');

router.post('/bookcab', auth, bookingCtrl.bookRide);
router.get('/mybookings', auth, bookingCtrl.getBookings);

module.exports = router;