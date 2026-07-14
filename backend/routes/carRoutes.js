const express = require('express');
const router = express.Router();
const carCtrl = require('../controllers/carController');
const auth = require('../middlewares/authMiddleware');
const upload = require('../middlewares/multer');

router.get('/', carCtrl.getAllCars);
router.post('/add', auth, upload.single('image'), carCtrl.addCar);
router.put('/edit/:id', auth, upload.single('image'), carCtrl.updateCar);
router.delete('/:id', auth, carCtrl.deleteCar);

module.exports = router;