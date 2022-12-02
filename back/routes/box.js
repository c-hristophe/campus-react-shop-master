const express = require('express');

const router = express.Router();
const boxCtrl = require('../controllers/box');



// Routes
router.get('/', boxCtrl.getAllBox);
router.post('/',    boxCtrl.createBox);
router.delete('/',    boxCtrl.deleteBox);
module.exports = router;