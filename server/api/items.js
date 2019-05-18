const router = require('express').Router()
const {Item} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll({
      where: {
        userId: req.session.userId
      }
    })
    res.json(items)
  } catch(err) {
    console.error(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const item = await Item.create({
      name: req.body.name,
      onHand: req.body.onHand,
      par: req.body.par,
      orderQty: req.body.orderQty,
      userId: req.session.userId
    })
    res.json(item)
  } catch(err) {
    console.error(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const items = await Item.findAll()
    if(items) {
      items.forEach(item => item.update({
          onHand: 0,
          orderQty: 0
        })
      })
    }
  } catch(err) {
    console.error(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id)
    if(item) {
      item.update(req.body)
      res.json(item)
    } else {
      res.sendStatus(404)
    }

  } catch(err) {
    console.error(err)
  }
})

router.delete('/:itemId', async (req, res, next) => {
  try {
    const item = await Item.destroy({
      where:{
        id: req.params.itemId
      }
    })
    res.json(item)
  } catch(err) {
    console.error(err)
  }
})

module.exports = router
