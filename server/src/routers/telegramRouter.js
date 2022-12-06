require('dotenv').config();
const router = require('express').Router();

const fetch = require('node-fetch');

router.post('/', async (req, res) => {
  try {
    const { text } = req.body;
    // const br = '%0A';
    // const msg = `${text}`;
    const { CHAT_ID } = process.env;
    const { BOT } = process.env;
    if (!text.trim()) {
      return res.json({ status: 'error', msg: 'Необходимо заполнить форму' });
    }
    if (text.length < 10) {
      return res.json({ status: 'error', msg: 'Слишком короткое сообщение. Опишите проблему подробнее. Минимум 20 символов.' });
    }
    const url = `https://api.telegram.org/bot${BOT}/sendMessage?chat_id=${CHAT_ID}&parse_mode=HTML&text=${text}`;
    await fetch(
      url,
    );
    res.json({
      message:
        'Ваша заявка принята. Ответ будет дан в течение 24 часов',
    });
  } catch (error) {
    res.status(500).json({ msg: 'Ошибка в файле telegramRouter' });
  }
});

module.exports = router;
