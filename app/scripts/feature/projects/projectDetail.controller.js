'use strict';

angular
  .module('tisseursdetemps')
  .controller('ProjectDetailCtrl', ProjectDetailCtrl);

function ProjectDetailCtrl($http, $state, $scope, $sce) {
  var vm = this;

  vm.project = null;

  $http.get('../../resources/projects.json').then(function(obj){
    return obj.data;
  }).then(function(projects) {
    vm.project = projects.find(function(project) {
    	return project.id == $state.params.id;
    }) || null;

    if(vm.project != null) {
    	$scope.projectDescription = $sce.trustAsHtml(vm.project.description);
    }
  });

}
