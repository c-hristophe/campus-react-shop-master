const express = require('express');

const router = express.Router();
const contactCtrl = require('../controllers/contact');



// Routes
router.get('/', contactCtrl.getAllcontacts);
router.post('/', contactCtrl.createcontact);

module.exports = router;