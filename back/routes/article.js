const express = require('express');

const router = express.Router();
const articleCtrl = require('../controllers/article');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Routes
router.get('/', articleCtrl.getAllarticles);
router.get('/:id', articleCtrl.getOnearticle);
router.post('/',    articleCtrl.createarticle);
router.put('/:id',   articleCtrl.modifyarticle);
router.delete('/:id',   articleCtrl.deletearticle);


module.exports = router;