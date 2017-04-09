'use strict';

angular
  .module('tisseursdetemps')
  .controller('PartCtrl', PartCtrl);

function PartCtrl($http) {
  var vm = this;

  vm.partners = null;

  $http.get('../../resources/partners.json').then(function(obj){
    vm.partners = obj.data;
  });

}
