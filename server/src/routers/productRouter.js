const router = require('express').Router();
const {
  Product, Lot, User, Game, Category,
} = require('../../db/models');

router.get('/:id', async (req, res) => {
  try {
    // console.log('РЕК ПАРАМС С ФРОНТА', req.params.id);
    const product = await Product.findOne(
      {
        where: { id: +req.params.id },
        include: [Category, Game, Lot],
        // include: [Category, Game, { model: Lot, include: User }],
        // include: [Category, Game, { model: Lot, where:  }],
      },
    );
    console.log('КОНКРЕТНЫЙ ПРОДУКТ', product);
    res.json(product);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
