var router = require('express').Router()

var {List} = require('../db')

router.get('/', async (req, res, next) => {//new sytax
  try{
   const lists = await List.findAll() //method form sequlize
   res.json(lists)
  } catch(err){
    console.error(err)
  }
})

router.post('/', async function (req, res, next){
  try{
    var list = await List.create(req.body)
    res.json(list)
  } catch(err){
    console.error(err)
  }
})

module.exports = router
