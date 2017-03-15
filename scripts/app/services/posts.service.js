(function(){
    'use strict'

    angular.module('treinamento')
    .factory('PostsService', PostsService);

    PostsService.$inject = ['$resource'];
    function PostsService($resource){
        var service = $resource('https://jsonplaceholder.typicode.com/posts/:id', {id: '@id'},{
            put : {
                method : 'PUT'
            }
        });
        return service;
    }
})();