(function(){
'use strict';

angular.module('treinamento') //usando o modulo treinamento
    .controller('EmpresaController', EmpresaController);

    EmpresaController.$inject = ['$scope'];

    function EmpresaController($scope) {
        $scope.title = "Empresa";
    }

})();