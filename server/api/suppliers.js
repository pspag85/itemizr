const router = require('express').Router()
const {Supplier, Item, List} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const suppliers = await Supplier.findAll({
      where: {userId: req.session.userId}
    })
    res.json(suppliers)
  } catch(err) {
    console.error(err)
  }
})

router.post('/', async ({body, session}, res, next) => {
  const {name, contact} = body
  const {userId} = session
  try {
    const supplier = await Supplier.create({
      name,
      contact,
      userId
    })
    res.json(supplier)
  } catch(err){
    console.error(err)
  }
})

router.get('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    const supplier = await Supplier.findByPk(id)
    res.json(supplier)
  } catch(err) {
    console.error(err)
  }
})

module.exports = router