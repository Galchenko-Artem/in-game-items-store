require('@babel/register');
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const cors = require('./middlewares/cors');
const dbCheck = require('./dbConfig');

const app = express();

// Проверяем подключение к базе данных!
dbCheck();

app.use(cors);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}!`);
});
