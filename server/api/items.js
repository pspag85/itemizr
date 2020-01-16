const router = require('express').Router()
const {Item} = require('../db')

router.post('/', async (req, res, next) => {
  try {
    const items = await Item.bulkCreate(req.body, {
      updateOnDuplicate: ["name", "onHand", "par", "orderQty", "listId"],
      returning: true
    })
    res.json(items)
  } catch(err) {
    console.error(err)
  }
})

module.exports = router
