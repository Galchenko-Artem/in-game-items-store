const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/', async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    if (!login.trim() || !password.trim()) {
      return res.json({ status: 'error', msg: 'Необходимо заполнить все поля' });
    }
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        req.session.login = user.login;
        req.session.userId = user.id;
        req.session.avatarUser = user.image;
        req.session.isAdmin = user.isAdmin;
        return res.json({
          status: 'success',
          msg: 'Успешный вход',
          login: req.session.login,
          userId: req.session.userId,
          isAdmin: req.session.isAdmin,
          image: req.session.avatarUser,
        });
      }
    }
    return res.json({ status: 'error', msg: 'Неправильный логин или пароль' });
  } catch (error) {
    res.status(500).json({ msg: `${error.msg}` });
  }
});

module.exports = router;
