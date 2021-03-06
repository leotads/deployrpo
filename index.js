'use strict';

require('dotenv').config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env.development'
})

const PORT = process.env.PORT || 4000;

const app = require('express')();
const consign = require('consign');

consign()
  .then('./src/config/middlewares.js')
  .then('./src/config/database.js')
  .then('./src/api/controllers')
  .then('./src/routes.js')
  .into(app)

app.listen(PORT, (err) => err ? console.log(err) : console.log(`Backend rodando em: http://localhost:${PORT}`))