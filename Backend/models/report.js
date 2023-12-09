const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Report = sequelize.define('report',{
    date: Sequelize.DATE,
    id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:Sequelize.STRING,
    status:Sequelize.STRING

    
});

module.exports = Report;