(function(){
'use strict';

angular.module('treinamento') //usando o modulo treinamento
    .config(stateConfig); // adicionando uma config ao modulo

    stateConfig.$inject = ['$stateProvider']; // injetando dependencia para o config

    // declarando o metodo da configuracao
    function stateConfig($stateProvider) {
      $stateProvider.state('app.contato', {
          parent : 'app',
          url : '/contato',
          views : {
              'content@' : {
                  templateUrl : '/scripts/app/contato/contato.html',
                  controller : 'ContatoController'
              }
          }
      });  
    }

})();