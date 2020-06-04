const router = require('express').Router();
const {Product, Vendor, Category, Unit} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: {userId: req.session.userId},
      order: [['id', 'ASC']],
      include: [
        {
          model: Vendor,
          attributes: ['name'],
        },
        {
          model: Category,
          attributes: ['name'],
        },
        {
          model: Unit,
          attributes: ['name'],
        },
      ],
    });
    res.json(products);
  } catch (err) {
    console.error(err);
  }
});

router.get('/:vendorId', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: {
        vendorId: req.params.vendorId,
      },
      order: [['id', 'ASC']],
      include: {
        model: Vendor,
        attributes: ['name'],
      },
    });
    res.json(products);
  } catch (err) {
    console.error(err);
  }
});

router.post('/', async (req, res, next) => {
  const {price} = req.body;
  const priceNumber = parseFloat(price);
  try {
    const vendor = await Vendor.findOne({
      where: {
        name: req.body.vendor,
      },
    });
    const category = await Category.findOne({
      where: {
        name: req.body.category,
      },
    });
    const unit = await Unit.findOne({
      where: {
        name: req.body.unit,
      },
    });
    const productData = {
      price: priceNumber,
      categoryId: category && category.id,
      vendorId: vendor.id,
      unitId: unit && unit.id,
      userId: req.session.userId,
      ...req.body,
    };
    const product = await Product.create(productData);
    res.json(product);
  } catch (err) {
    console.error(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  const {id} = req.params;
  try {
    await Product.destroy({
      where: {id: Number(id)},
    });
    res.sendStatus(200);
    res.end();
  } catch (err) {
    console.error(err);
  }
});

router.put('/', async (req, res, next) => {
  try {
    const product = await Product.update(req.body, {
      where: {id: req.body.id},
    });
    if (!product) res.sendStatus(500);
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
