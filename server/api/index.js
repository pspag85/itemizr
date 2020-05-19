const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/vendors', require('./vendors'));
router.use('/products', require('./products'));
router.use('/categories', require('./categories'));

module.exports = router;
