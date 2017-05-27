angular.module('popup', ['ngRoute', 'popupCtrls'])
    .config( function($routeProvider) {
        $routeProvider
        .when('/',{
            templateUrl:'views/index.html'
        })
        .when('/link',{
            templateUrl: 'views/link.html',
            controller: 'linkController'
        })
       
        .otherwise({
            redirect: '/'
        })
    });