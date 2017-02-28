/* global __root */

var controllers = require('../app/controllers')

// =======================
// Routes
// =======================
module.exports = function (app) {

	app.get("/ping", (req, res) => {
		res.send("pong");
		// res.redirect('/users');
	});

	app.get("/", controllers.view.homePage);
	app.get("/getAllResult", controllers.view.getAllResult);
	app.get("/getDistanceMatrix/:origin/:destination/:distance/:time", controllers.view.getDistanceMatrix)
	app.get("*", controllers.view.errorPage);

};
