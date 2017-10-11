angular.module('baseRoute', []).factory('baseRouter', function($location){
	return {
		route: function(string){

			if($location.host() == 'localhost'){

				url = "http://localhost:8888/canvas/base"+string;

			} else {

				url = "http://67.205.166.58/canvas/base"+string;

			}

			return url;
		}
	}
})