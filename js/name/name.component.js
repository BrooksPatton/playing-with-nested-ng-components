angular.module('componentTest').component('name', {
	templateUrl: '/js/name/name.template.html',
	bindings: {
		name: '=',
		checked: '='
	}
})
