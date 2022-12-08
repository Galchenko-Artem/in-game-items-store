require('@babel/register');
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const cors = require('./middlewares/cors');
const sessions = require('./middlewares/sessions');
const dbCheck = require('./dbConfig');

const app = express();

const userRouter = require('./routers/userRouter');
const regRouter = require('./routers/regRouter');
const logoutRouter = require('./routers/logoutRouter');
const authRouter = require('./routers/authRouter');
const telegramRouter = require('./routers/telegramRouter');
const GamecreateRoute = require('./routers/gameCsGoCreateRouter');
const GameWowCreateRouter = require('./routers/gameWowCreateRouter');
const GameDotaCreateRouter = require('./routers/gameDotaCreateRouter');

// Проверяем подключение к базе данных!
dbCheck();

app.use(sessions);
app.use(cors);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user', userRouter);
app.use('/reg', regRouter);
app.use('/logout', logoutRouter);
app.use('/auth', authRouter);
app.use('/request', telegramRouter);
app.use('/', GamecreateRoute);
app.use('/', GameWowCreateRouter);
app.use('/', GameDotaCreateRouter);

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}!`);
});
