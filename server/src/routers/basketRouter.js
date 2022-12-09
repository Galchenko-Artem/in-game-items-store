const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Basket } = require('../../db/models');

router.post('/', async (req, res) => {
  const el = req.body;
  const user_id = req.session.userId;
  console.log(el, user_id);
  const newItem = await Basket.create({
    name: el.name,
    price: el.price,
    image: el.image,
    UserId: user_id,
  });
  res.json({ status: 'success' });
});

module.exports = router;
