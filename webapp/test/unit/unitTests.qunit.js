/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"accenturetutorial4.ui5./tutorial4/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
