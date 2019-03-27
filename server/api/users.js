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

router.put('/login', async function (req, res,next){
  try{
    var user = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
    if(user){
      req.session.userId = user.id
      res.json(user)
    }else{
      console.error('incorrect email or password')
      res.sendStatus(401)
    }
  }catch(err){
    console.error(err)
  }
})

module.exports = router
