const router = require('express').Router()
const {User} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      where: {
        userId: 0
      }
    })
    if(users) {
      res.json(users)
    }
  } catch(err) {
    console.error(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    if(user) {
      req.session.userId = user.id
      res.json(user)
    }
  } catch(err) {
    console.error(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    user.userId = 0
    if(user) {
      res.json(user)
    }
  } catch(err) {
    console.error(err)
  }
})

router.get('/user', async (req, res, next) => {
  try {
    if(!req.session.userId) {
      res.sendStatus(401)
    } else {
      const user = await User.findById(req.session.userId)
      if(!user) {
        res.sendStatus(401)
      } else {
        res.json(user)
      }
    }
  } catch (error) {
    next(error)
  }
})

router.put('/login', async (req, res,next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
    if(user) {
      req.session.userId = user.id
      res.json(user)
    } else {
      console.error('incorrect email or password')
      res.sendStatus(401)
    }
  } catch(err) {
    console.error(err)
  }
})

router.delete('/logout', (req, res, next) => {
  req.session.destroy()
  res.status(204).end()
})

router.delete('/:id', async(req, res,next) => {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    })
    if(user) {
      res.json(user)
    } else {
      res.sendStatus(404)
    }
  } catch(err) {
    console.error(err)
  }
})

module.exports = router
