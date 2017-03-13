(function(){
    'use strict';

    angular.module('treinamento',['iu-router'])
        .run(runFn);
        

    function runFn() {
        alert('treinamento');
    }


    angular.module('treinamento')
        .config(configFn);

    configFn.$inject = ['$stateProvider']
    function configFn($stateProvider) {

    }
})();