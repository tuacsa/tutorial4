/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["accenture/tutorial4/ui5/tutorial4/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
