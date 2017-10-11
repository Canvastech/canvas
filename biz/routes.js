webApp
	.config(function($routeProvider, $locationProvider) {
		$routeProvider

			.when('/', {
	    		templateUrl: 'views/splash.html',
	    		controller: 'SplashController',
	  		})

	  		
	 	;

	});