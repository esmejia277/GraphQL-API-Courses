const { Model } = require('objection')
const knexConfig = require('./knexfile')
const knex = require('knex')

const knexConnection = knex(knexConfig.development)
Model.knex(knexConnection)
