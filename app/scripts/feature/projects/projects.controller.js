'use strict';

angular
  .module('tisseursdetemps')
  .controller('ProjectsCtrl', ProjectsCtrl);

function ProjectsCtrl($http) {
  var vm = this;

  vm.projects = null;

  $http.get('../../resources/projects.json').then(function(obj){
    vm.projects = obj.data;
  });

}
