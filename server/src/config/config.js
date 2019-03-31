/* eslint-disable prefer-destructuring */
require('dotenv').config()

const env = process.env
const config = {}

// Database config
config.dbname = env.DB_NAME || 'cms'
config.dbport = env.DB_PORT || '27017'
config.dbhost = env.DB_HOST || 'localhost'
config.dbpass = env.DB_PASSWORD || 'secret'

// App config
config.port = env.APP_PORT || '3000'

// Env config
config.env = env.ENV || 'production'

// JWT config
config.jwt = {
  expiresIn: env.JWT_EXPIRESIN || '1d',
  maxAge: env.JWT_EXPIRESIN || '1d'
}

module.exports.config = config

