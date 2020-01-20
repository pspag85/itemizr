const router = require('express').Router()
const {Item} = require('../db')

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

// Uses true "upsert" if the model has a primary key, otherwise findOrCreate().
const bulk_upsert = (model, rows) => {
  return Promise.all(rows.map(row => {
    if(model.findOne({where: {id: row.id}})) {
      return model.upsert(row)
    } else {
      return model.findOrCreate({
        where: row,
        defaults: row
      })
    }
  })).catch(err => console.error(err))
}

router.post('/', (req, res, next) => {
  const items = bulk_upsert(Item, req.body)
  res.json(items)
})

module.exports = router
