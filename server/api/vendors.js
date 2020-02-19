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

router.delete('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    await Vendor.destroy({
      where: {id: Number(id)}
    })
    res.sendStatus(200)
    res.end()
  } catch(err) {
    console.error(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const vendor = await Vendor.update(req.body, {
      where: {id: req.body.id}
    })
		if(!vendor) res.sendStatus(500)
		res.status(200).json({
			message: 'Updated successfully',
			vendor
		})
  } catch(err) {
    console.error(err)
  }
})

module.exports = router