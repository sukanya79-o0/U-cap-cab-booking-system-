const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminController');
const auth = require('../middlewares/authMiddleware');

router.post('/register', adminCtrl.register);
router.post('/login', adminCtrl.login);
router.get('/users', auth, adminCtrl.getAllUsers);
router.delete('/users/:id', auth, adminCtrl.deleteUser);

module.exports = router;