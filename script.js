/**
 * Created by Nick on 3/30/2016.
 */

var app = angular.module('routingApp', ['ngRoute']);

app.controller('routeCtrl', function($scope){

});

app.config(function($routeProvider) {
    $routeProvider
    //default and main
        .when('/',{
            templateUrl: 'main.html',
            controller: 'mainCtrl'
        })
    //macarons
        .when('/macarons',{
            templateUrl: 'macarons.html',
            controller: 'macCtrl'
        })
    //gifts parties
        .when('/gifts_parties',{
            templateUrl: 'gifts_parties.html',
            controller: 'giftCtrl'
        })
    //contact
        .when('/contact',{
            templateUrl: 'contact.html',
            controller: 'contactCtrl'
        })
    //error catch
        .otherwise({
            redirectTo:'/'
        })
});

app.controller('mainCtrl', function($scope){
    $scope.banner = "assets/images/welcome-image.png";
});

app.controller('macCtrl', function($scope){
    $scope.banner = "assets/images/our-macarons-image.png";
});

app.controller('giftCtrl', function($scope){
    $scope.banner = "assets/images/gifts-parties-image.png";
});

app.controller('contactCtrl', function($scope){
    $scope.banner = "assets/images/contact-image.png";
});