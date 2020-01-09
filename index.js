'use strict';

require('dotenv').config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env.development'
})

const app = require('express')();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.status(200).json({hello: 'World'})
})

app.listen(PORT, (err) => err ? console.log(err) : console.log(`Backend rodando em: http://localhost:${PORT}`))