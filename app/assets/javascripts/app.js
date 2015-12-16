'use strict';

var autoPairApp = angular.module('AutoPairApp', [
	'ngResource',
  'ngRoute',
  'templates'
	]);

autoPairApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/add-test', {
        templateUrl: 'addTest.html',
        controller: 'AddTestController'
      }).
      when('/view-question', {
        templateUrl: 'viewQuestion.html',
        controller: 'ViewQuestionController'
      }).
      when('/add-question', {
        
      }).
      when('/programming', {
        templateUrl: 'programming.html',
        controller: 'ProgrammingController'
      }).
      when('/multiple-choice', {
        templateUrl: 'multipleChoice.html',
        controller: 'MultipleChoiceController'
      }).
      otherwise({
        redirectTo: '/'
      });
 }]);


