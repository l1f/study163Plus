angular.module('popup', ['ngRoute'])
    .config( function($routeProvider) {
        $routeProvider
        .when('/',{
            templateUrl:'views/index.html'
        })
        .when('/link',{
            templateUrl: 'views/link.html'
        })
       
        .otherwise({
            redirect: '/'
        })
    });