const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node_api_codelab', 'root', '', {
//   host: '127.0.0.1',
//   dialect: 'mysql'
// });

const config = require('./config/environments');
const sequelize = new Sequelize(
  config.mysql.database,
  config.mysql.username,
  config.mysql.password,
  config.mysql.hostinfo
)

const User = sequelize.define('user', {
  name: Sequelize.STRING
});

module.exports = {
  sequelize: sequelize,
  User: User
}
