var tweetApp = angular.module('tweetApp', ['ngRoute', 'ngMaterial']);

tweetApp.directive('customMenu', function(){
    return {
        restrict: 'E', 
        templateUrl: "views/menu.html"
    }
});

tweetApp.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'views/home.html',
        controller: 'homeController'
    });
    $routeProvider.when('/trump',{
        templateUrl: 'views/home.html',
        controller: 'trumpController'
    });
    $routeProvider.when('/hillary',{
        templateUrl: 'views/home.html',
        controller: 'hillaryController'
    });
    $routeProvider.otherwise('/');
});

