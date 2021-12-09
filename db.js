const { Sequelize } = require('sequelize');

//Importing models
const Game = require('./models/Game');
const ScoreBoard = require('./models/ScoreBoard');
const User = require('./models/User');

//Database connection
const sequelize = new Sequelize('gameboard-api', process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
  });
  
//Getting models
const models = [
  //  Game,
   ScoreBoard,
   User
];

//Registering models into Sequelize
 for (let model of models) {
   model(sequelize);
 }

//Configuring relations
const { games, scoreboards,  users } = sequelize.models;
scoreboards.belongsTo(users); // Relation one-to-one in reviews table
// games.belongsTo(scoreboards); // Relation: Order has one user

module.exports = sequelize;