module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('dean_login', [
      {
        id: 'dean1',
        password: 'dean',
        token: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'dean2',
        password: 'dean',
        token: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('dean_login', null, {});
  },
};
