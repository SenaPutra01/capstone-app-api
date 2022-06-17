require('dotenv').config

const {
  DB_USER = "",
  DB_PASSWORD = "",
  DB_NAME = ""
} = process.env

module.exports = {
  "development": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": `${DB_NAME}_development`,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": `${DB_NAME}_test`,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": `${DB_NAME}_production`,
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
