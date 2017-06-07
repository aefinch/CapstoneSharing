app.config(function($routeProvider){
	$routeProvider
	.when('/projects', {
		templateUrl: 'partials/project-list.html',
		controller: 'ProjectCtrl'
	})
	.otherwise('/projects');
});