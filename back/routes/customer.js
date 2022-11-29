const express = require('express');

const router = express.Router();
const customerCtrl = require('../controllers/customer');
const { route } = require('./user');



// Routes
router.get('/', customerCtrl.getAllcustomers);
router.post('/', customerCtrl.creatCustomer);
router.delete('/:id', customerCtrl.deleteCustomer);
router.put('/:id',   customerCtrl.modifyCustomer);
module.exports = router;