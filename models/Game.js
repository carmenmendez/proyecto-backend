const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('games', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'scoreboards',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  gameId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'games',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

