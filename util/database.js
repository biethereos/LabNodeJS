const Sequelize = require('sequelize');

const sequelize = new Sequelize('labnode', 'root', 'av.nt@$*19b$*', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
