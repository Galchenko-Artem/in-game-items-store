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

router.post('/', async (req, res) => {
  try {
    const { userId } = req.session;
    const {
      id, name, price, GameId, CategoryId, image, description,
    } = req.body;
    const product = await Product.findOne({ where: { id } });
    console.log('НАЙДЕННЫЙ ПРОДУКТ ПО АЙДИ', product);
    const editProduct = await product.update({
      name, price, GameId, CategoryId, image, description, approved: false,
    });
    console.log('ИЗМЕНЕННЫЙ ПРОДУКТ', editProduct);
    res.json(editProduct);
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
