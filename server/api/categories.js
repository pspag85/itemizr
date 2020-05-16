const router = require('express').Router();
const {Category} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      where: {userId: req.session.userId},
      attributes: ['id', 'name'],
      order: [['id', 'ASC']],
    });
    res.json(categories);
  } catch (err) {
    console.error(err);
  }
});

router.post('/', async ({body, session}, res, next) => {
  const {name} = body;
  const {userId} = session;
  const categoryData = {name, userId};
  try {
    const category = await Category.create(categoryData);
    res.json(category);
  } catch (err) {
    console.error(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  const {id} = req.params;
  try {
    await Category.destroy({
      where: {id: Number(id)},
    });
    res.sendStatus(200);
    res.end();
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
