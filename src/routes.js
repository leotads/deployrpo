'use strict';

module.exports = app => {

  app.get('/', (req, res) => {
    res.status(200).json({hello: 'World'})
  })

  app.get('/getAllServers', app.src.api.controllers.serverController.getAllServers )
  app.post('/createServer', app.src.api.controllers.serverController.createServer )

}