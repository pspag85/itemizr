const router = require('express').Router()
const {Item} = require('../db')

router.get('/:listId', async (req, res, next) => {
  try {
    const items = await Item.findAll({
      where: {
        listId: req.params.listId
      }
    })
    res.json(items)
  } catch(err) {
    console.error(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const lastItem = await Item.findOne({
      order: [ ['id', 'DESC']]
    })
    const id = lastItem.id + 1
    res.json(id)
  } catch(err) {
    console.error(err)
  }
})

router.post('/', async (req, res, next) => {
  const savedItems = req.body.map(item => {
    delete id
    return item
  })
  try {
    const items = await Item.bulkCreate(savedItems)
    res.json(items)
  } catch(err) {
    console.error(err)
  }
})

router.delete('/:listId', async (req, res, next) => {
  try {
    const items = await Item.destroy({
      where: {
        listId: req.params.listId
      }
    })
    res.json(items)
  } catch(err) {
    console.error(err)
  }
})

module.exports = router
