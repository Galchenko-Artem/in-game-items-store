const router = require('express').Router();
const { Product } = require('../../db/models');

router.get('/dota2/listOfAccounts', async (req, res) => {
  try {
    const gameLots = await Product.findAll();

    res.json(gameLots);
    // console.log(gameLots);
  } catch (error) {
    console.log(error);
  }
});

router.get('/dota2/skins', async (req, res) => {
  try {
    const gameLots = await Product.findAll();

    res.json(gameLots);
    // console.log(gameLots);
  } catch (error) {
    console.log(error);
  }
});
router.get('/dota2/services', async (req, res) => {
  try {
    const gameLots = await Product.findAll();

    res.json(gameLots);
    // console.log(gameLots);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
