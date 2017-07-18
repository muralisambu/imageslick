(function () {
    'use strict';

    angular
        .module('bhk')
        .component('app', {
            templateUrl: 'Home/App',
            controller: 'AppController'
        })
        .config(config);


    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when("", "/app");
        $urlRouterProvider.otherwise('/app');
        $stateProvider
            .state('app', {
                url: '/app',
                component: 'app'
            });
    }


})();