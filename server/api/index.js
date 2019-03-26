var router = require('express').Router()

router.use('/lists', require('./lists'))
router.use('/items', require('./items'))
router.use('/users', require('./users'))


module.exports = router
