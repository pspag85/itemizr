const router = require('express').Router()

router.use('/items', require('./items'))
router.use('/lists', require('./lists'))
router.use('/vendors', require('./vendors'))
router.use('/users', require('./users'))

module.exports = router
