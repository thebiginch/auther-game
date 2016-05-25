'use strict';

var Sequelize = require('sequelize');
var secret = require('./app/secret.js');


var databaseURI = secret.dbURI;

var db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  }
});

module.exports = db;
