(function(){
    'use strict'
    angular.module('treinamento') //usando o modulo treinamento
    .config(stateConfig); // adicionando uma config ao modulo

    stateConfig.$inject = ['$stateProvider']; // injetando dependencia para o config

    // declarando o metodo da configuracao
    function stateConfig($stateProvider) {
        $stateProvider.state('app.outros', {
            parent : 'app',
            url : '/outros',
            views : {
                'content@' : {
                    templateUrl : '/scripts/app/outros/outros.html',
                    controller : 'OutrosController'
                }
            }
        });  
    }
})();