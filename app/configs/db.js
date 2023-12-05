const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})

module.exports = sequelize
