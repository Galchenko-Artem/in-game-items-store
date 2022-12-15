/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'Тренер ',
          price: 10,
          GameId: 1,
          CategoryId: 3,
          image: 'public/images/cs_servis1.jpg',
          description: 'буст аккаунта кроме скинов',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'бустану до калаша',
          price: 50,
          GameId: 1,
          CategoryId: 3,
          image: 'public/images/cs_servis2.jpg',
          description: 'Буст аккаунта до биг стара (+1 звание 50 )',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'буст аккаунтов',
          price: 14,
          GameId: 1,
          CategoryId: 3,
          image: 'public/images/cs_servis3.jpg',
          description: 'могу поднять ранг, может как и вместе,так и одна, у меня больше 1100 часов наиграно',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Калибровка-Дойдём',
          price: 31,
          GameId: 1,
          CategoryId: 3,
          image: 'public/images/cs_servis4.jpg',
          description: 'Буст аккаунта с Сильвера 1 до 4 голд новы',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Калибровка',
          price: 17,
          GameId: 1,
          CategoryId: 3,
          image: 'public/images/cs_servis5.jpg',
          description: 'Буст от любого звания до 1 голд новы!',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Подниму звание',
          price: 30,
          GameId: 1,
          CategoryId: 3,
          image: 'public/images/cs_servis6.jpg',
          description: 'Апну вам любое звание',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Готов забустить',
          price: 25,
          GameId: 1,
          CategoryId: 3,
          image: 'public/images/cs_servis7.jpg',
          description: 'пробущу аккаунт до биг стар за 25',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Буст мм',
          price: 15,
          GameId: 1,
          CategoryId: 3,
          image: 'public/images/cs_servis8.jpg',
          description: 'буст аккаунтов фейсит/мм до любого звания или уровня Личные достижения: звание-глобал фейсит уровень: 9 1900ело',
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
