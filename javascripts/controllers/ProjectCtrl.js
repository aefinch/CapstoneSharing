app.controller("ProjectCtrl", function($scope, ProjectFactory){
	$scope.addProject = () => {
		ProjectFactory.postNewProject($scope.newProject).then(() => {
			$scope.newProject = {};
			getProjects();
		}).catch((error) => {
			console.log("add error", error);
		});
	};
	let getProjects = () => {
		ProjectFactory.getProjectList().then((projects) => {
			$scope.projects = projects;
		}).catch((error) => {
			console.log("get error", error);
		});
	};

	getProjects();
});