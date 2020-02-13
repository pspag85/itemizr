const router = require('express').Router()
const {Vendor, Product, List} = require('../db')

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
  const {name, email, phone} = body
  const {userId} = session
  try {
    const vendor = await Vendor.create({
      name,
      email,
      phone,
      userId
    })
    res.json(vendor)
  } catch(err){
    console.error(err)
  }
})

module.exports = router