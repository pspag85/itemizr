const router = require('express').Router();
const {User} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    if (!req.session.userId) {
      res.sendStatus(401);
    } else {
      const user = await User.findByPk(req.session.userId);
      if (!user) {
        res.sendStatus(401);
      } else {
        res.json(user);
      }
    }
  } catch (error) {
    next(error);
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    if (user) {
      req.session.userId = user.id;
      res.json(user);
    }
  } catch (err) {
    console.error(err);
  }
});

router.put('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    if (user) {
      req.session.userId = user.id;
      res.json(user);
    } else {
      console.error('incorrect email or password');
      res.sendStatus(401);
    }
  } catch (err) {
    console.error(err);
  }
});

router.delete('/logout', (req, res, next) => {
  req.session.destroy();
  res.status(204).end();
});

module.exports = router;
