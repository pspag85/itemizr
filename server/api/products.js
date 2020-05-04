const router = require('express').Router()
const {Product, Vendor} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      order: [['id', 'ASC']],
      include: {
        model: Vendor,
        attributes: ['name']
      }
    })
    res.json(products)
  } catch(err) {
    console.error(err)
  }
})

router.post('/', async (req, res, next) => {
  const {price} = req.body
  const priceNumber = parseFloat(price)
  try {
    const vendor = await Vendor.findOne({
      where: {
        name: req.body.vendor
      }
    })
    const productData = {
      price: priceNumber,
      vendorId: vendor.id,
      ...req.body
    }
    const product = await Product.create(productData)
    res.json(product)
  } catch(err) {
    console.error(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    await Product.destroy({
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
    const product = await Product.update(req.body, {
      where: {id: req.body.id}
    })
		if(!product) res.sendStatus(500)
		res.status(200).json(product)
  } catch(err) {
    console.error(err)
  }
})

module.exports = router
