const { Sequelize } = require('sequelize');

const connection = new Sequelize({
    dialect: "mysql",
    database: "loja01",
    host: "localhost",
    port: 3366,
    username: "root",
    password: "1234"
});

module.exports = connection;