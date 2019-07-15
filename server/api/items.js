const router = require('express').Router()
const {Item} = require('../db')

router.get('/:listId', async (req, res, next) => {
  const {listId} = req.params
  try {
    const items = await Item.findAll({
      where: {
        listId
      }
    })
    res.json(items)
  } catch(err) {
    console.error(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const items = await Item.bulkCreate(req.body)
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
