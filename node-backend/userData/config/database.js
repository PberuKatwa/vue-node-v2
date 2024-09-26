const Sequelize = require('sequelize');
module.exports = new Sequelize('node_database', 'postgres', 'postgres', {
 host: 'localhost',
 dialect: 'postgres', // Change to your database type
});