const router = require('express').Router();
const { Support } = require('../../db/models');

router.get('/', async (req, res) => {
  const allPleasData = await Support.findAll({ where: { status: false } });
  const allPleas = allPleasData.map((plea) => plea.dataValues);
  res.json({ status: 'success', allPleasData });
});
module.exports = router;

router.put('/', async (req, res) => {
  const adminMsg = req.body;
  console.log(adminMsg);
  const currentPlea = await Support.findOne({ where: { id: adminMsg.userPleaId } });
  console.log('===>>> 👉👉👉 file: supportRouter.js:15 👉👉👉 currentPlea', currentPlea);
  const updatedPlea = await currentPlea.update({ answer: adminMsg.adminAnswer, status: true });
  console.log('===>>> 👉👉👉 file: supportRouter.js:16 👉👉👉 updatedPlea', updatedPlea);
});
