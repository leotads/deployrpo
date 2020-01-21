'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Servers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      server: {
        type: Sequelize.STRING
      },
      ip: {
        type: Sequelize.STRING
      },
      porta: {
        type: Sequelize.STRING
      },
      pathini: {
        type: Sequelize.STRING
      },
      pathrpo: {
        type: Sequelize.STRING
      },
      developer: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Servers');
  }
};