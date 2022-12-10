const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Basket } = require('../../db/models');

router.get('/', async (req, res) => {
  const { userId } = req.session;
  console.log(userId);
  if (userId) {
    const allBasketItemsData = await Basket.findAll({ where: { UserId: userId } });
    const allBasketItems = allBasketItemsData.map((el) => el.dataValues);
    res.json(allBasketItems);
  }
});

router.post('/', async (req, res) => {
  const el = req.body;
  console.log(el);
  const user_id = req.session.userId;
  const newItem = await Basket.create({
    name: el.name,
    price: el.price,
    image: el.image,
    UserId: user_id,
  });
  res.json({ status: 'success' });
});

router.delete('/', async (req, res) => {
  const { id } = req.body;
  console.log('req.body delete', req.body);
  const deleted = await Basket.destroy({ where: { id } });
  console.log('===>>> 👉👉👉 file: basketRouter.js:21 👉👉👉 deleted', deleted);
  res.json({ status: 'success', msg: 'Удалено из корзины', id });
});

module.exports = router;
