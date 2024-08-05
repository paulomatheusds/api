const connection = require('../database/connection');
const { DataTypes } = require('sequelize');

let CategoryModel = connection.define("Category", {
    name: DataTypes.STRING(50)
});

module.exports = CategoryModel;