var path     = require('path');
var express  = require('express');
var settings = require('./settings');
var models = require('../app/models');

module.exports = function (app) {
    app.use('/public', express.static(__root + '/public'))
    app.set('view engine', 'jade')
    app.set("views", __root + '/public');

    app.use(function (req, res, next) {
      models(function (err, db) {
        if (err) return next(err);

        req.models = db.models;
        req.db = db;

        return next();
      })
    })

    app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
    });
};
