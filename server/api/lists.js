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

router.post('/', async function (req, res, next){
  try{
    var list = await List.create(req.body)
    res.json(list)
  } catch(err){
    console.error(err)
  }
})

router.put('/', async (req, res, next) => {  // new function syntax => 'arrow function'
  try{
    var list = await List.findOne({  //use req body server side to update most recent row in lists table
      order: [ [ 'date', 'DESC' ]]
    })
    if(list) {
      list.update({
        items: req.body
      })
      res.json(list)
    }
  } catch(err){
    console.error(err)
  }
})


module.exports = router
