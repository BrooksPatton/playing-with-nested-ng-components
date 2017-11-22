angular.module('componentTest').controller('HelloWorld', helloWorld);

function helloWorld() {
	this.name = '';
	this.checked = false;

	this.submitForm = function() {
		this.name = this.submittedName;
	}
}
