const router = require('express').Router()
const {Product} = require('../db')
const {bulk_upsert} = require('../../utility/helpers')

router.get('/new', async (req, res, next) => {
  try {
    const lastProduct = await Product.findOne({
      order: [['id', 'DESC']]
    })
    const id = lastProduct ? lastProduct.id + 1 : 1
    res.json(id)
  } catch(err) {
    console.error(err)
  }
})

router.post('/', (req, res, next) => {
  const product = bulk_upsert(Product, req.body)
  res.json(product)
})

module.exports = router
