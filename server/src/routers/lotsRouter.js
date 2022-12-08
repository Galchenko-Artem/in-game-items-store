const router = require('express').Router();
const { Product, Lot } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { userId } = req.session;
    const userLots = await Product.findAll({ include: { model: Lot, where: { UserId: userId } } });
    // console.log('ЛОТЫ ЮЗЕРА', userLots);
    res.json(userLots);
  } catch (error) {
    console.log(error);
  }
});

router.delete('/', async (req, res) => {
  try {
    // console.log('АЙДИ ЛОТА БЭК', req.body.id);
    await Product.destroy({ where: { id: +req.body.id } });
    res.json({ status: 'удалено' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
