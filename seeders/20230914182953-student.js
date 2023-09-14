module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('student_login', [
      {
        id: 'student1',
        name: 'Gowri',
        password: 'student',
        token: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'student2',
        name: 'Ashly',
        password: 'student',
        token: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('student_login', null, {});
  },
};
