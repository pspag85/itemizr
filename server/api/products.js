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

router.post('/', async (req, res, next) => {
  try {
    const product = await Product.create(req.body)
    res.json(product)
  } catch(err) {
    console.error(err)
  }
})


module.exports = router
