(function(){
    'use strict'

    angular.module('treinamento')
    .factory('PhotosService', PhotosService);

    PhotosService.$inject = ['$resource'];
    function PhotosService($resource){
        var service = $resource('https://jsonplaceholder.typicode.com/photos/:id', {id: '@id'},{
            put : {
                method : 'PUT'
            }
        });
        return service;
    }
})();