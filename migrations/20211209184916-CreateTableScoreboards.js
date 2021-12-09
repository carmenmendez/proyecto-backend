'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('scoreboards', { id: Sequelize.INTEGER });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('scoreboards');
  }
};
