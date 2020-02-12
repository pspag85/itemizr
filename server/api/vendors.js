const router = require('express').Router()
const {Vendor, Item, List} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const vendors = await Vendor.findAll({
      where: {userId: req.session.userId}
    })
    res.json(vendors)
  } catch(err) {
    console.error(err)
  }
})

router.post('/', async ({body, session}, res, next) => {
  const {name, contact} = body
  const {userId} = session
  try {
    const vendor = await Vendor.create({
      name,
      contact,
      userId
    })
    res.json(vendor)
  } catch(err){
    console.error(err)
  }
})

router.get('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    const vendor = await Vendor.findByPk(id)
    res.json(vendor)
  } catch(err) {
    console.error(err)
  }
})

module.exports = router