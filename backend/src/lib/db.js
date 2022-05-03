const Sequelize = require('sequelize')
const mysql = require('mysql2')

const { db } = require('./config')
const { user, password, host, name, port } = db

const usersModel = require('../models/users')
const operationsModel = require('../models/operations')

const connection = mysql.createConnection({ host, port, user, password })

connection.query(`CREATE DATABASE IF NOT EXISTS ${name};`)

const DBURL = `mysql://${user}:${password}@${host}/${name}`
const sequelize = new Sequelize(DBURL)

const User = usersModel(sequelize, Sequelize)
const Operation = operationsModel(sequelize, Sequelize)

sequelize.sync()
  .then(() => {
    console.log('Tables created successfully')
  })
  .catch(err => {
    console.log(err)
  })

module.exports = {
  User,
  Operation,
  sequelize
}
