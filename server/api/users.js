var router = require('express').Router()

var {User} = require('../db')

router.post('/signup', async function (req, res, next){
  try{
    var user = await User.create(req.body)
    res.json(user)
  } catch(err){
    console.error(err)
  }
})

module.exports = router
