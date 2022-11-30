const express = require('express');
const router = express.Router();
const addressCtrl = require('../controllers/address');
const { route } = require('./user');



// Routes
router.get('/', addressCtrl.getAllAddresses);
router.post('/', addressCtrl.creatAddress);
router.put('/:id',   addressCtrl.modifyAddress);

module.exports = router;