const Sequelize = require('sequelize');
const sequelize = new Sequelize('testproject','root','Mysqlnode147*',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;