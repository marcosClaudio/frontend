(function(){
    'use strict';

    angular.module('treinamento') 
    .config(configFn);

    configFn.$inject = ['$stateProvider']
    function configFn($stateProvider) {
        $stateProvider.state('app', {
            abstract : true,
            resolve : {}
        });
    }

})();