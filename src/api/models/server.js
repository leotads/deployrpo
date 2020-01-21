'use strict';
module.exports = (sequelize, DataTypes) => {
  const Server = sequelize.define('Server', {
    server: DataTypes.STRING,
    ip: DataTypes.STRING,
    porta: DataTypes.STRING,
    pathini: DataTypes.STRING,
    pathrpo: DataTypes.STRING,
    developer: DataTypes.BOOLEAN
  }, {});
  Server.associate = function(models) {
    // associations can be defined here
  };
  return Server;
};