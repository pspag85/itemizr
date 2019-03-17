var router = require('express').Router()

var {Item} = require('../db')

router.get('/', async (req, res, next) => {//new sytax
  try{
   const items = await Item.findAll() //method form sequlize
   res.json(items)
  } catch(err){
    console.error(err)
  }
})

router.post('/', async function (req, res, next){
  try{
    var item = await Item.create(req.body)
    res.json(item)
  } catch(err){
    console.error(err)
  }
})

router.put('/:id', async function (req, res, next){
  try{
    var item = await Item.findById(req.params.id)
    console.log('req body log',req.body)
    if (item){
      item.update({
        name: req.body.name
      })
    console.log('ITEM test', item)
      res.json(item)
    }else{
      res.sendStatus(404)
    }

  } catch(err){
    console.error(err)
  }
})

router.delete('/:itemId', async function (req, res, next){
  try{
    var item = await Item.destroy({
      where:{
        id: req.params.itemId
      }
    })
    res.json(item)
  } catch(err){
    console.error(err)
  }
})

module.exports = router
