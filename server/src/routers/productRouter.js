const router = require('express').Router();
const { Product, Lot, User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const product = await Product.findOne(
      { where: { id: req.params.id }, include: { model: Lot, User } },
    );
    console.log('КОНКРЕТНЫЙ ПРОДУКТ', product);
    res.json(product);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
