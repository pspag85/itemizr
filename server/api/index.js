var router = require('express').Router()

router.use('/lists', require('./lists'))
router.use('/items', require('./items'))


module.exports = router
