require('dotenv').config();
const router = require('express').Router();

const fetch = require('node-fetch');

router.post('/', async (req, res) => {
  try {
    const { text, tel } = req.body;
    const br = '%0A';
    const msg = `Новая заявка с сайта inGame-store:${br} _________________ ${br}Телефон пользователя:${br}${tel}${br}Сообщение:${br}${text}`;
    const { CHAT_ID } = process.env;
    const { BOT } = process.env;
    if (!text.trim()) {
      return res.json({ status: 'error', msg: 'Необходимо заполнить форму' });
    }
    if (text.length < 19) {
      return res.json({ status: 'error', msg: 'Слишком короткое сообщение. Опишите проблему подробнее. Минимум 20 символов.' });
    }
    const url = `https://api.telegram.org/bot${BOT}/sendMessage?chat_id=${CHAT_ID}&parse_mode=HTML&text=${msg}`;
    await fetch(
      url,
    );
    res.json({
      message:
        'Ваша заявка принята. Ответ будет дан в течение 24 часов',
    });
  } catch (error) {
    res.status(500).json({ status: 'success', msg: 'Ошибка в файле telegramRouter' });
  }
});

module.exports = router;
