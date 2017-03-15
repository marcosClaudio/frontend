(function(){
    'use strict';

    angular.module('treinamento',[
        'ui.router',
        'ngResource'
        ])
        .run(runFn);
        

    function runFn() {
        // alert('treinamento');
    }

})();