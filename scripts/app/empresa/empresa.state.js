(function(){
'use strict';

angular.module('treinamento') //usando o modulo treinamento
    .config(stateConfigure); // adicionando uma config ao modulo

    stateConfigure.$inject = ['$stateProvider']; // injetando dependencia para o config

    // declarando o metodo da configuracao
    function stateConfigure($stateProvider) {
      $stateProvider.state('app.empresa', {
          parent : 'app',
          url : '/empresa',
          views : {
              'content@' : {
                  templateUrl : '/scripts/app/empresa/empresa.html',
                  controller : 'EmpresaController'
              }
          }
      });  
    }

})();