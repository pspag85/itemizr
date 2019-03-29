var router = require('express').Router()
var {List} = require('../db')

router.get('/', async (req, res, next) => {
  try{
   const lists = await List.findAll({
      order: [ ['id', 'DESC'], ['date', 'DESC'] ]
    })
   res.json(lists)
  } catch(err){
    console.error(err)
  }
})

router.post('/', async (req, res, next) => {
  try{
    var list = await List.create(req.body)
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
        items: req.body
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
