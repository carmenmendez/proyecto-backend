'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('games', { id: Sequelize.INTEGER });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('games');
  }
};
