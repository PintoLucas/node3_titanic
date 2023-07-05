const express = require('express');
const router = express.Router();

const passengerCtrl = require('../controllers/passenger');
const auth = require('../middleware/auth');

router.get('/', passengerCtrl.getAllPassengers);

module.exports = router;
