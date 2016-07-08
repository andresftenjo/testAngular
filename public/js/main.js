'use strict';

require.config({
	paths: {
		angular : '../angular/angular.min',
        "angular-route" : '../angular-route/angular-route.min'
	},
	shim: {
		angular: {
			exports: 'angular'
		}
	},
	deps: ['app']
});

/*
require(['app'], function (app) {
  app.init();
});*/