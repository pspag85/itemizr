var router = require('express').Router()

var {List} = require('../db')

router.get('/', async (req, res, next) => {//new syntax
  try{
   const lists = await List.findAll() //method from sequelize
   res.json(lists)
  } catch(err){
    console.error(err)
  }
})

router.post('/', async function (req, res, next){  //use req body server side to update most recent row in lists table
  try{
    var list = await List.create(req.body)  
    res.json(list)
  } catch(err){
    console.error(err)
  }
})

module.exports = router
