/* global __root */

var controllers = require('../app/controllers')

// =======================
// Routes
// =======================
module.exports = function (app) {

	app.get("/", controllers.view.homePage);
	app.get("/getAllResult", controllers.view.getAllResult);
	app.post("/postDistanceMatrix", controllers.view.postDistanceMatrix)
	app.get("*", controllers.view.errorPage);

};
