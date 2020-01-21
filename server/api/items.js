const router = require('express').Router()
const {Item} = require('../db')
const {bulk_upsert} = require('../../utility/helpers')

router.get('/', async (req, res, next) => {
  try {
    const lastItem = await Item.findOne({
      order: [['id', 'DESC']]
    })
    const id = lastItem ? {lastItem} : 1
    res.json(id)
  } catch(err) {
    console.error(err)
  }
})

router.post('/', (req, res, next) => {
  const items = bulk_upsert(Item, req.body)
  res.json(items)
})

module.exports = router
