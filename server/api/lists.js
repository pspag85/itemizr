var router = require('express').Router()
var {List} = require('../db')

router.get('/', async (req, res, next) => {
  try{
   const lists = await List.findAll({
      where: {userId: req.session.userId},
      order: [ ['id', 'DESC'], ['date', 'DESC'] ]
    })
   res.json(lists)
  } catch(err){
    console.error(err)
  }
})

router.post('/', async (req, res, next) => {
  console.log("req.session**********", req.session)
  try{
    var list = await List.create({
      date: req.body.date,
      items: req.body.items,
      userId: req.session.userId
    })
    res.json(list)
  } catch(err){
    console.error(err)
  }
})

router.put('/', async (req, res, next) => {
  try{
    var list = await List.findOne({
      order: [ ['id', 'DESC'], ['date', 'DESC'] ]
    })
    if(list) {
      list.update({
        items: req.body,
        userId: req.session.userId
      })
      res.json(list)
    }
  } catch(err){
    console.error(err)
  }
})

router.delete('/:listId', async (req, res, next) => {
  try{
    var list = await List.destroy({
      where:{
        id: req.params.listId
      }
    })
    res.json(list)
  } catch(err){
    console.error(err)
  }
})


module.exports = router
