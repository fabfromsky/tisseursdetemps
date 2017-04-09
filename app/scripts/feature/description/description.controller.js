'use strict';

angular
    .module('tisseursdetemps')
    .controller('DescCtrl', DescCtrl);

function DescCtrl($http) {

	var vm = this;

	vm.members = null;

	$http.get('../../resources/members.json').then(function(obj){
		vm.members = obj.data;
	});




}
