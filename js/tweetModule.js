var tweetApp = angular.module('tweetApp', ['ngRoute', 'ng-material']);

tweetApp.directive('customMenu', function(){
    return {
        restrict: 'E', 
        templateUrl: "views/menu.html"
    }
});

tweetApp.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'views/home.html',
        controller: 'layoutCtrl'
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








// tweetApp.directive('tweetHello', function(){
//     return {
//         restrict: 'E', 
//         template: "Hello, Class!"
//     }
// });
// tweetApp.directive('helloAttr', function(){
//     return {
//         restrict: 'A', 
//         // template: "Hello, Attribute!!",
//         templateUrl: "views/hello.html"
//     }
// });
// tweetApp.directive('helloClass', function(){
//     return {
//         restrict: 'C', 
//         template: "Hello, Class, from another type of class!"
//     }
// });

// tweetApp.directive('turnMeBlue', function(){
//     return {
//         link: function($scope, element, attrs){
//             element.bind('mouseenter', function(){
//                 element.css('color', $scope.myColor);
//             });
//             element.bind('mouseleave', function(){
//                 element.css('color', 'black');
//             });
//         }
//     }
// });

