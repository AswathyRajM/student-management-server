const moment = require('moment');
module.exports = {
  up: (queryInterface, Sequelize) => {
    const date = [
      moment('2023-10-20')
        .set({ hour: 16, minute: 30 })
        .format('YYYY-MM-DD HH:MM:SS'),
      moment('2023-10-19')
        .set({ hour: 15, minute: 30 })
        .format('YYYY-MM-DD HH:MM:SS'),
    ];
    return queryInterface.bulkInsert('sessions', [
      {
        id: 1,
        availableDateTime: date[0],
        dean_id: 'dean1',
        student_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        availableDateTime: date[0],
        dean_id: 'dean2',
        student_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        availableDateTime: date[1],
        dean_id: 'dean1',
        student_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sessions', null, {});
  },
};
