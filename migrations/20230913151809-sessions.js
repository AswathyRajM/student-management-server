'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sessions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      dean_id: {
        type: Sequelize.STRING,
        references: { model: 'dean_login', key: 'id' },
      },
      student_id: {
        type: Sequelize.STRING,
        references: { model: 'student_login', key: 'id' },
      },
      availableDateTime: { type: Sequelize.DATE },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sessions');
  },
};
