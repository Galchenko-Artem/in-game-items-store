const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    if (req.session.login) {
      res.json({
        login: req.session.login,
        userId: req.session.userId,
        isAdmin: req.session.isAdmin,
      });
    } else {
      res.json(null);
    }
  } catch (error) {
    res.json({ msg: `${error.message}` });
  }
});

module.exports = router;
