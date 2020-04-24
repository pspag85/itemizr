const router = require('express').Router()

router.use('/auth', require('./auth'))
router.use('/products', require('./products'))
router.use('/vendors', require('./vendors'))

module.exports = router
