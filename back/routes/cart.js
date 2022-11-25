const express = require('express');

const router = express.Router();
const cartCtrl = require('../controllers/cart');



// Routes
router.get('/', cartCtrl.getAllcarts);
router.post('/',    cartCtrl.createcart);
router.delete('/:id',    cartCtrl.deleteCart);
module.exports = router;