var router = require('express').Router()

var {Item} = require('../db')

router.post('/', async function (req, res, next){
  try{
    var item = await Item.create(req.body)
    res.json(item)
  } catch(err){
    console.error(err)
  }
})

module.exports = router
