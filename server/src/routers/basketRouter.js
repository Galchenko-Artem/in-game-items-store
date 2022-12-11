/* eslint-disable max-len */
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Basket, Product } = require('../../db/models');

// router.get('/', async (req, res) => {
//   const { userId } = req.session;
//   if (userId) {
//     const allBasketItemsData = await Basket.findAll({ where: { UserId: userId } });
//     const allBasketItems = allBasketItemsData.map((el) => el.dataValues);
//     res.json(allBasketItems);
//   }
// });

router.post('/', async (req, res) => {
  const { id } = req.body;
  const { userId } = req.session;
  const itemTrue = await Basket.findOne({ where: { UserId: userId, ProductId: id } });
  if (itemTrue) {
    return res.json({ status: 'error_inBasket', msg: 'Данный предмет уже находится у вас в корзине!' });
  }
  await Basket.create({
    UserId: userId,
    ProductId: id,
  });
  return res.json({ status: 'success' });
});

router.delete('/', async (req, res) => {
  const { id } = req.body;
  const { userId } = req.session;
  console.log(req.body, id, 'DELETE');
  const deleted = await Basket.destroy({ where: { UserId: userId, ProductId: id } });
  res.json({ status: 'deleted', msg: 'Удалено из корзины' });
});

// router.delete('/1', async (req, res) => {
//   const el = req.body;
//   const { userId } = req.session;
//   console.log('req.body delete', req.body);
//   const ourBasketitem = await Basket.findOne({ where: { UserId: userId, ProductId: el.id } });
//   if (ourBasketitem) {
//     ourBasketitem.destroy();
//   }
//   res.json({ status: 'success', msg: 'Удалено из корзины' });
// });

module.exports = router;
