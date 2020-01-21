'use strict';

const { Server } = require('../models');

module.exports = app => {
  const getAllServers = async (req, res) => {
    try {
      const servers = await Server.findAll()

      res.status(200).json(servers);
    } catch(err) {
      res.status(401).json(err);
    }
  }

  const createServer = async (req, res) => {
    try {
      
      const { server } = req.body;

      var createServer = await Server.findAll({ where: { server: server }})
console.log(createServer.dataValues)
 /*     if (createServer) throw new Error(`Servidor já criado com ID: ${createServer}`);
      var createServer = await Server.create(req.body);

      res.status(200).json(createServer);
*/
    } catch(err) {
      res.status(401).json(err );
    }
  }

  return { getAllServers,
    createServer 
  }
}