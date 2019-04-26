var router = require('express').Router()

var {Item} = require('../db')

router.get('/', async (req, res, next) => {//new sytax
  try{
   const items = await Item.findAll({
    where: {
      userId: req.session.userId
    }
   }) //method form sequlize
   res.json(items)
  } catch(err){
    console.error(err)
  }
})

router.post('/', async function (req, res, next){
  console.log("Reqbody*****************", req.body)
  try{
    var item = await Item.create({
      name: req.body.name,
      onHand: req.body.onHand,
      par: req.body.par,
      orderQty: req.body.orderQty,
      userId: req.session.userId
    })
    res.json(item)
  } catch(err){
    console.error(err)
  }
})

router.put('/', async function (req, res, next){
  try{
    var items = await Item.findAll()
    if (items){
      items.forEach(function(item){
        return item.update({
          onHand: 0,
          orderQty: 0
        })
      })
    }
  } catch(err){
    console.error(err)
  }
})

router.put('/:id', async function (req, res, next){
  try{
    var item = await Item.findById(req.params.id)
    if (item){
      item.update(req.body)
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
