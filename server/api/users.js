var router = require('express').Router()

var {User} = require('../db')

router.get('/', async function(req, res, next) {
  try{
    var users = await User.findAll()
    if(users) {
      res.json(users)
    }
  } catch(err) {
    console.error(err)
  }
})

router.post('/signup', async function (req, res, next){
  try{
    var user = await User.create(req.body)
    if(user){
      req.session.userId = user.id
      res.json(user)
    }
  } catch(err){
    console.error(err)
  }
})

router.post('/', async function (req, res, next){
  try{
    var user = await User.create(req.body)
    if(user){
      res.json(user)
    }
  }catch(err){
    console.error(err)
  }
})

router.get('/user', async (req, res, next) => {
  try {
    if (!req.session.userId) {
      res.sendStatus(401)
    } else {
      const user = await User.findById(req.session.userId)
      if (!user) {
        res.sendStatus(401)
      } else {
        res.json(user)
      }
    }
  } catch (error) {
    next(error)
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

router.delete('/logout', function (req, res, next){
  req.session.destroy()
  res.status(204).end()
})

module.exports = router
