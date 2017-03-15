(function(){
'use strict';

angular.module('treinamento') //usando o modulo treinamento
    .controller('EmpresaController', EmpresaController);

    EmpresaController.$inject = ['$scope', 'photosList'];

    function EmpresaController($scope, photosList) {
        $scope.title = "Empresa";
        $scope.photos = photosList;
    }

})();