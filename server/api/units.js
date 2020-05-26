const router = require('express').Router();
const {Unit} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const units = await Unit.findAll({
      userId: {
        $or: {
          $eq: null,
          $lt: req.session.userId,
        },
      },
      where: {}, // needed to prevent warning
      attributes: ['id', 'name'],
      order: [['id', 'ASC']],
    });
    res.json(units);
  } catch (err) {
    console.error(err);
  }
});

router.post('/', async ({body, session}, res, next) => {
  const {name} = body;
  const {userId} = session;
  const unitData = {name, userId};
  try {
    const unit = await Unit.create(unitData);
    res.json(unit);
  } catch (err) {
    console.error(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  const {id} = req.params;
  try {
    await Unit.destroy({
      where: {id: Number(id)},
    });
    res.sendStatus(200);
    res.end();
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
