app.factory("ProjectFactory", function($q, $http, FIREBASE_CONFIG){
	let getProjectList = () => {
		let projects = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/projects.json`)
			.then((fbProjects) => {
				let projectList = fbProjects.data;
				Object.keys(projectList).forEach((key) => {
					projects.push(projectList[key]);
				});
				resolve(projects);
			}).catch((error) => {
				reject(error);
			});
		});
	};

	let postNewProject = (newProject) => {
		return $q((resolve, reject) => {
			$http.post(`${FIREBASE_CONFIG.databaseURL}/projects.json`, JSON.stringify(newProject))
			.then((results) => {
				resolve(results);
			}).catch((error) => {
				reject(error);
			});
		});
	};

	return {getProjectList:getProjectList, postNewProject:postNewProject};
});