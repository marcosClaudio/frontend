(function(){
'use strict';

angular.module('treinamento') //usando o modulo treinamento
    .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'PostsService'];
    

    function HomeController($scope, PostsService) {
        $scope.title = "Home";
        $scope.posts = [];

        PostsService.query().$promise.then(fnSuccess, fnError);

        function fnSuccess(data){
            $scope.posts = data;
        }

        function fnError(){
            
        }
    }

})();