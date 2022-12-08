/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'Аккаунт',
          price: 950,
          GameId: 3,
          CategoryId: 1,
          image: 'public/images/acc_1.jpeg',
          description: 'ТОП 800 EU аккаунт',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Аккаунт',
          price: 5000,
          GameId: 3,
          CategoryId: 1,
          image: 'public/images/pudj_321.jpg',
          description: 'ТОП 200 EU аккаунт',
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
