/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'Аккаунт',
          price: 10,
          GameId: 1,
          CategoryId: 1,
          image: 'public/images/acc_csgo_2131.webp',
          description: 'Аккаунт с медалями 5 и 10 лет службы',
          approved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Аккаунт',
          price: 25,
          GameId: 1,
          CategoryId: 1,
          image: 'public/images/csgo322.jpeg',
          description: 'Аккаунт золотая лига',
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
