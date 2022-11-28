const express = require('express');

const router = express.Router();
const totalDayCtrl = require('../controllers/totalDay');



// Routes
router.get('/', totalDayCtrl.getAllTotalDay);
router.post('/',    totalDayCtrl.createTotalDay);
module.exports = router;