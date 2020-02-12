const router = require('express').Router()
const {Item, List} = require('../db')

router.get('/:id/items', async (req, res, next) => {
  try {
    const items = await Item.findAll({
      where: {
        listId: req.params.id
      },
      order: [ ['id', 'ASC'], ['createdAt', 'ASC']]
    })
    res.json(items)
  } catch(err) {
    console.error(err)
  }
})

router.get('/:id', async ({params}, res, next) => {
  try {
    const list = await List.findByPk(params.id)
    res.json(list)
  } catch(err) {
    console.error(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const lists = await List.findAll({
      where: {userId: req.session.userId},
      order: [ ['id', 'DESC'], ['date', 'DESC'] ]
    })
    res.json(lists)
  } catch(err) {
    console.error(err)
  }
})

router.post('/', async ({body, session}, res, next) => {
  const {date, name, vendorId} = body
  const {userId} = session
  try {
    const list = await List.create({
      date,
      name,
      userId,
      vendorId
    })
    res.json(list)
  } catch(err){
    console.error(err)
  }
})

router.put('/:id', async ({body, params}, res, next) => {
  const {name} = body
  try {
    const list = await List.findByPk(params.id)
    list.update({name})
    res.json(list)
  } catch(err) {
    console.error(err)
  }
})

router.put('/', async ({session}, res, next) => {
  const {user} = session
  try {
    const list = await List.findOne({
      order: [ ['id', 'DESC'], ['date', 'DESC'] ]
    })
    if(list) {
      list.update({
        userId
      })
      res.json(list)
    }
  } catch(err){
    console.error(err)
  }
})


router.delete('/:id/items', async (req, res, next) => {
  try {
    const items = await Item.destroy({
      where: {
        listId: req.params.id
      }
    })
    res.end()
  } catch(err) {
    console.error(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const list = await List.destroy({
      where:{
        id: req.params.id
      }
    })
    res.json(list)
  } catch(err){
    console.error(err)
  }
})


module.exports = router
