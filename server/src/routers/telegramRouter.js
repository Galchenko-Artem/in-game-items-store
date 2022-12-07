require('dotenv').config();
const router = require('express').Router();

const fetch = require('node-fetch');

router.post('/', async (req, res) => {
  function validPhone(tel) {
    const isPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(tel);
    return isPhone;
  }
  try {
    const { text, tel, telegramAcc } = req.body;

    console.log(req.body);
    const br = '%0A';
    const msg = `Новая заявка с сайта inGame-store:${br} _________________ ${br}${br}Телефон пользователя:${br}${tel}${br}${br}Аккаунт в Telegram:${br}${telegramAcc}${br}${br}Сообщение:${br}${text}`;
    const { CHAT_ID } = process.env;
    const { BOT } = process.env;
    const url = `https://api.telegram.org/bot${BOT}/sendMessage?chat_id=${CHAT_ID}&parse_mode=HTML&text=${msg}`;
    if (!text.trim() || !tel.trim()) {
      return res.json({ status: 'error', msg: 'Необходимо заполнить все обязательные поля' });
    }
    if (text.length < 19) {
      return res.json({ status: 'error', msg: 'Слишком короткое сообщение. Опишите проблему подробнее. Минимум 20 символов.' });
    }
    if (!validPhone(tel)) {
      return res.json({ status: 'error', msg: 'Неправильный формат мобильного номера телефона' });
    }
    if (telegramAcc[0] === '@' || !telegramAcc.length) {
      await fetch(
        url,
      );
      return res.json({
        status: 'success',
        msg:
          'Ваша заявка принята. Ответ будет дан в течение 24 часов. Следить за статусом можно в личном кабинете',
      });
    }
    if (telegramAcc[0] !== '@') {
      return res.json({ status: 'error', msg: 'Telegram аккаунт должен начинаться с @' });
    }
  } catch (error) {
    res.status(500).json({ status: 'success', msg: 'Ошибка в файле telegramRouter' });
  }
});

module.exports = router;
