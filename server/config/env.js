var path     = require('path');
var express  = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var settings = require('./settings');
var models = require('../app/models');

module.exports = function (app) {
    app.use('/public', express.static(__root + '/public'))
    app.set('view engine', 'jade')
    app.set("views", __root + '/public');

    let pool = mysql.createPool(settings.database)
    .on("connection", function(connection) {
    	console.log("pulling out a connection now")
    })

    pool.getConnection(function(err, connection) {
    	if (err) {
    		throw err;
    	}
    })

    app.use(bodyParser.json() );
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(function(req, res, next) {
  	 res.header("Access-Control-Allow-Origin", "*");
  	 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	 next();
  	});

    app.use(function (req, res, next) {
      models(function (err, db) {
        if (err) return next(err);

        req.models = db.models;
        req.db = db;

        return next();
      })
    })
};
