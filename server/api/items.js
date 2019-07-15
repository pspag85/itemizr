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

router.post('/', async ({body}, res, next) => {
  const {name, onHand, par, orderQty, listId} = body
  try {
    const item = await Item.create({
      name,
      onHand,
      par,
      orderQty, 
      listId
    })
    res.json(item)
  } catch(err) {
    console.error(err)
  }
})

// router.put('/', async (req, res, next) => { clear quantities route
//   try {
//     const items = await Item.findAll()
//     if(items) {
//       items.forEach(item => item.update({
//           onHand: 0,
//           orderQty: 0
//         })
//       )
//     }
//   } catch(err) {
//     console.error(err)
//   }
// })

router.put('/:listId', async (req, res, next) => {
  // const {listId} = req.params
  try {
    const items = await Item.findAll({
      where: {
        listId: req.params.listId
      }
    })
    items.forEach(item => {
      item.update({
        saved: true
      })
    })
    res.json(items)
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

router.delete('/:listId/cancel', async (req, res, next) => {
  const {listId} = req.params
  try {
    await Item.destroy({
      where:{
        saved: false,
        listId
      }
    })
  } catch(err) {
    console.error(err)
  }
})

module.exports = router
