const router = require('express').Router()
const {Product} = require('../db')
const {bulk_upsert} = require('../../utility/helpers')

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch(err) {
    console.error(err)
  }
})

router.post('/', (req, res, next) => {
  const product = bulk_upsert(Product, req.body)
  res.json(product)
})

module.exports = router
