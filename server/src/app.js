require('@babel/register');
require('dotenv').config();
const path = require('path');

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
const lotsRouter = require('./routers/lotsRouter');

const GamecreateRoute = require('./routers/gameCsGoCreateRouter');
const GameWowCreateRouter = require('./routers/gameWowCreateRouter');
const GameDotaCreateRouter = require('./routers/gameDotaCreateRouter');

const GameLotGetDotaRouter = require('./routers/gameLotGetDotaRouter');
const GameLotGetCsGoRouter = require('./routers/gameLotGetCsGoRouter');
const GameLotGetWowRouter = require('./routers/gameLotGetWowRouter');

const uploadRouter = require('./routers/uploadRouter');
const productRouter = require('./routers/productRouter')

// Проверяем подключение к базе данных!
dbCheck();
app.use(sessions);
app.use(cors);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, '../public')));

// console.log(path.join(path.join(__dirname, '../public')));

app.use('/user', userRouter);
app.use('/reg', regRouter);
app.use('/logout', logoutRouter);
app.use('/auth', authRouter);
app.use('/request', telegramRouter);
app.use('/lots', lotsRouter);

app.use('/', GamecreateRoute);
app.use('/', GameWowCreateRouter);
app.use('/', GameDotaCreateRouter);

app.use('/', GameLotGetDotaRouter);
app.use('/', GameLotGetCsGoRouter);
app.use('/', GameLotGetWowRouter);

app.use('/product', productRouter)


app.use('/upload', uploadRouter);

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}!`);
});
