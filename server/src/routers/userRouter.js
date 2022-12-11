/* eslint-disable max-len */
const router = require('express').Router();
const { Basket, Product } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    if (req.session.login) {
      const basketProduct = await Basket.findAll({ include: Product, where: { UserId: req.session.userId } });
      const basketWithoutData = basketProduct.map((el) => el.dataValues);
      const productData = basketWithoutData.map((el) => el.Product);
      const basket = productData.map((el) => el.dataValues);
      const user = {
        login: req.session.login,
        userId: req.session.userId,
        isAdmin: req.session.isAdmin,
        image: req.session.avatarUser,
      };
      res.json({
        user,
        basket,
      });
    } else {
      res.json(null);
    }
    // if (req.session.login) {
    //   const user = {
    //     login: req.session.login,
    //     userId: req.session.userId,
    //     isAdmin: req.session.isAdmin,
    //     image: req.session.avatarUser,
    //   };
    //   console.log(basket, user, 'posle 15 back');
    //   res.json(
    //     {
    //       user,
    //       basket,
    //     },
    //   );
    // } else {
    //   res.json(null);
    // }
    // res.json({ msg: 'ok' });
  } catch (error) {
    res.json({ msg: `${error.message}` });
  }
});

module.exports = router;
