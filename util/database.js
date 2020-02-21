const Seuqelize = require('sequelize');

const sequelize = new Seuqelize(
    'node-complete',
    'root',
    'IamONRz3357@',
    {
        dialect: 'mysql',
        host:'localhost'
    });

module.exports = sequelize;