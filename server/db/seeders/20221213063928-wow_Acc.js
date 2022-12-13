'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'Рома',
          price: 700,
          GameId: 2,
          CategoryId: 1,
          image: 'public/images/wow_acc1.jpg',
          description: 'Орда',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Кирил',
          price: 540,
          GameId: 2,
          CategoryId: 1,
          image: 'public/images/wow_acc2.jpg',
          description: 'Альянс',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Денис',
          price: 350,
          GameId: 2,
          CategoryId: 1,
          image: 'public/images/wow_acc3.jpg',
          description: 'Орда',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Игорь',
          price: 120,
          GameId: 2,
          CategoryId: 1,
          image: 'public/images/wow_acc4.jpg',
          description: 'Альянс',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Стас',
          price: 500,
          GameId: 2,
          CategoryId: 1,
          image: 'public/images/wow_acc5.jpg',
          description: 'Орда',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Рома',
          price: 300,
          GameId: 2,
          CategoryId: 1,
          image: 'public/images/wow_acc6.jpg',
          description: 'Орда',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Евгений',
          price: 250,
          GameId: 2,
          CategoryId: 1,
          image: 'public/images/wow_acc7.jpg',
          description: 'Орда',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Артём',
          price: 100,
          GameId: 2,
          CategoryId: 1,
          image: 'public/images/wow_acc8.jpg',
          description: 'Орда',
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

