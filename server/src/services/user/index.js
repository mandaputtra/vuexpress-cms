// Contains route and middleware

const Joi = require('joi')
const { UserController } = require('./controller')
const { register, login } = require('./validation')

async function routes(fastify) {
  fastify.route({
    method: 'POST',
    url: '/login',
    schema: login,
    schemaCompiler: schema => data => Joi.validate(data, schema),
    handler: UserController.login
  })

  fastify.route({
    method: 'POST',
    url: '/register',
    schema: register,
    schemaCompiler: schema => data => Joi.validate(data, schema),
    handler: UserController.register
  })

  fastify.route({
    method: 'GET',
    preValidation: [fastify.verifyjwt],
    url: '/logout',
    handler: UserController.logout
  })

  fastify.route({
    method: 'GET',
    preValidation: [fastify.verifyjwt],
    url: '/users',
    handler: UserController.getUserList
  })
}

module.exports = routes
