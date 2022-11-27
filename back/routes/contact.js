const express = require('express');

const router = express.Router();
const contactCtrl = require('../controllers/contact');
const { route } = require('./user');



// Routes
router.get('/', contactCtrl.getAllcontacts);
router.post('/', contactCtrl.creatContact);
router.delete('/:id', contactCtrl.deleteContact);

module.exports = router;