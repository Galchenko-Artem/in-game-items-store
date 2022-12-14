'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'УРОВЕНЬ 60',
          price: 100,
          GameId: 2,
          CategoryId: 1,
          image: 'public/images/wow_acc1.jpg',
          description: 'СД --- 7 персонажей 60 лвла ( хант,пал,дк,друид,прист,дх,маг) 3 персонажа 50 лвл (рога,вар,варлок)',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'УРОВЕНЬ 60',
          price: 54,
          GameId: 2,
          CategoryId: 1,
          image: 'public/images/wow_acc2.jpg',
          description: 'ДХ 2 леги 301 PVP шмот , Твинк Хант 60 лвл Годрунни альянс, Твинк Пал 60 лвл Годрунни альянс ',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'УРОВЕНЬ 70',
          price: 35,
          GameId: 2,
          CategoryId: 1,
          image: 'public/images/wow_acc3.jpg',
          description: 'на аккаунте на Гордунни рог 411 фул хонор сет(на полях боя )почти фул прокачен дрейк(летун)много трансмога+трансмог чарок на оружие125 маунтов из этих есть 3 маунта за Мастер ключей Shadowland за 2500 рио (топ) 3 донат маунта коровка птичка и за 6 месяцев подписки, книга из башни магов а так же сеты трансмогрификаций15 красивейших званий типа Воплощение мести',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'УРОВЕНЬ 60',
          price: 30,
          GameId: 2,
          CategoryId: 1,
          image: 'public/images/wow_acc4.jpg',
          description: '💙Личный аккаунт💙 Был куплен Shadowlands epic💙12 персов 60 лвл и 200-250 итем лвл💙Украина💙',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'УРОВЕНЬ 60',
          price: 50,
          GameId: 2,
          CategoryId: 1,
          image: 'public/images/wow_acc5.jpg',
          description: '✅ Личный Аккаунт 🔥 2008 ГОД ☑️ Шаман 60lvl уровень вещей +230 , 2200 рейтинг 2х2 & 3х3. ✅',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'УРОВЕНЬ 50',
          price: 30,
          GameId: 2,
          CategoryId: 1,
          image: 'public/images/wow_acc6.jpg',
          description: 'Воин 45 уровня,маг 40 уровня,жрец 50 уровня ,охотник на демонов 40 уровня,чернокнижник 45 уровня(сервер ревущий фьорд)Вечная Песня:Паладин 40 уровня ,разбойник 29 уровня ,охотник на демонов 39 уровня,остальное по мелочи.',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'УРОВЕНЬ 57',
          price: 25,
          GameId: 2,
          CategoryId: 1,
          image: 'public/images/wow_acc7.jpg',
          description: '28дней подписки World of Warcraft--------------------------------был куплен shadowlands Heroic edition и блестяш53к голдыWorld of Warcraft WotLK Classic------------2к голды1чар - 11 лвл рога',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'УРОВЕНЬ 70',
          price: 10,
          GameId: 2,
          CategoryId: 1,
          image: 'public/images/wow_acc8.jpg',
          description: '❤️ 372 илвл ❤️ Монах ВВ ❤️ Драгон Флай❤️ Оригинальная почта ❤️',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};

