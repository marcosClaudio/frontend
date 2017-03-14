# Treinamento frontend Ws Work
```
Criando branch grunt no github 
$ git checkout -b grunt 

Comitando branch grunt
$ git push -u origin branch
```

Para ignorar arquivos ou diretorios utilizamos o arquivo .gitignore, onde adicionamos os insumos nao versionaveis.

Para voltar para o master do github:
```
$ git checkout master
```

Para fazer o merge de uma branch
```
$ git merge grunt(branch)
```  

Armazenando credenciais do github (uma semana)
```
$ git config --global credential.helper 'cache --timeout=604800'
```

## Grunt

Instalando o Grunt
```
$ sudo npm install -g grunt-cli
```

Automatizador de tasks

Utilizaremos para os seguintes fins:
* Deploy de ambientes
* Definicao de constantes
* Injecao de dependencias

Para inicializar um projeto grunt precisamos de 2 arquivos:
* package.json
* Gruntfile.js

Para gerar o package.json executamos o comando:
```
npm init
```

Para incluir modulos para desenvolvimento:
```
npm install grunt --save-dev
```

Para rodar o projeto grunt:
```
grunt
ou
grunt default
```
### Grunt injector
```
npm install grunt-injector --save-dev
```
Modulo para injecao de arquivos especificos no index.html.

### Grunt Wiredep
```
npm install grunt-wiredep --save-dev
```
Modulo para injecao de dependencias do projeto.

### Grunt Watch
```
npm install grunt-contrib-watch --save-dev
```
Modulo para monitorar mudancas no projeto e executar tasks pre-definidas.

### Grunt HTTP Server
```
npm install grunt-http-server --save-dev
```
Modulo para disponibilizar um servidor local para o projeto.

## Bower

Instalando o Bower
```
$ sudo npm install -g bower
```

Gerenciador de dependencias de insumos para web. 


* Javascripts
* Css
* Icones
* Fontes

Para gerar o bower.json:
```sh
bower init
```

Para incluir dependencias para o projeto
```sh
bower install jquery --save
```

## Angular
AngularJS é um framework desenvolvido pelo Google para tratar o frontend como uma aplicação. Nela implementamos o conceito de SPA (Single Page Aplication), onde não há troca de páginas síncronas.

Instalando o angular

```sh
$ bower install angular --save
```

### Inicializando e utilizando a aplicação AngularJS
Para inicializar uma aplicação AngularJS na página precisamos seguir os seguites passos:
* Incluir a biblioteca AngularJS
* Identificar a aplicação no HTML
* Criar um módulo da aplicação
* Utilizar o módulo da aplicação

#### Incluindo a biblioteca
A inclusão da biblioteca AngularJS nos nossos estudos está sendo incluída pelo Bower e grunt-wiredep.

#### Identificando a aplicação no HTML
Devemos identificar a aplicação no HTML para que nosso módulo saiba onde deverá atuar no contexto do nosso HTML. Para tal implementação, utilizaremos o atributo ```ng-app```:
```html
<!DOCTYPE html>
<html lang="en">
...
<body ng-app="treinamento" ng-strict-di>
...
</body>
</html>
```

#### Criando módulo da aplicação AngularJS
Devemos identificar para o AngularJS o módulo de nossa aplicação, no nosso caso: **treinamento**.
Para a declaração de um módulo AngularJS, precisamos utilizar o método ```angular.module(nome_do_modulo, arr_de_dependencias)```, assim registramos para uso do resto de nossa aplicação.
```javascript
(function(){
    'use strict;'

    // declarando o módulo treinamento
    angular.module('treinamento', []);
})()

```
> Estamos utilizando o 'use strict;' para que o interpretador seja rigoroso e não aceite voltas no código, sendo exigido que todas as declarações sejam explícitas.

#### Utilizando o módulo criado.
Para utilizar o módulo AngularJS que criamos, não podemos mais utilizar o segundo parâmetro do método ```angular.module()```, que seria o método declarativo de módulo.
```js
(function(){
    'use strict;'

    // utilizando o módulo treinamento para a criação de um controller
    angular.module('treinamento')
        .controller('MyCtrl', MyCtrl);
    

    MyCtrl.$inject = ['$scope'];

    function MyCtrl($scope){
        /* ... código do controller ... */
    }
})()
```

### ui-router
Ui-router será utilizado para a criação de rotas para a aplicação. 
Estas rotas, internamente são tratadas como ```states```, são responsáveis pela troca de conteúdo/estado da página apresentado ao usuário.

Para a instalação do ui-router na aplicação via bower:
```sh
$ bower install angular-ui-router --save
```

Para utilizarmos o ui-router em nossa aplicação, precisamos indentificá-lo na declaração de dependências do nosso módulo:
```js
(function(){
    'use strict';

    angular.module('treinamento', ['ui.router']);
})();
```

Vamos adotar um padrão para desenvolvimento onde toda as rotas/states da aplicação terão um pai abstrato, que tem será utilizando a declaração de states ```$stateProvider.state(nome_do_state, options)```, como declarado abaixo:
```js
(function(){
    'use strict';

    angular.module('treinamento')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider){
        $stateProvider.state('app', {
            abstract : true
        });
    }

})()

```
Todos os states são declarados através do *provider* ```$stateProvider```, ele tem a função de indicar ao ui-router que há uma rota a ser respeitada dentro da aplicação.

#### Trabalhando states com Views e Controllers
Identificamos uma view root da aplicação para onde os states serão renderidados, esta view necessáriamente precisa ser declarada no index.html:
```html
<!DOCTYPE html>
<html lang="en">
...
<body ng-app="treinamento" ng-strict-di>
    <div ui-view="content"></div>
</body>
</html>
```

Após esta declaração, podemos utilizar os states indicando a view root para onde serão renderizados os HTMLs de cada state.
Para declarar um state vamos utilizar o padrão:
```js
(function(){
    'use strict';

    angular.module('treinamento')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider){
        $stateProvider.state('app.home', {
            parent : 'app', // nome do pai do state
            url : '/home', // url que será acessado ex.: http://localhost/#!/home
            views : { 
                'content@' : {
                    templateUrl : 'caminho_relativo_do_html_do_state.html',
                    controller : 'MyStateController'
                }
            }
        });
    }
})();
```
Como podemos notar, o nome do state respeita a hierarquia que definimos, como o state ```home``` é filho do state abstrato ```app```, seu nome fica: ```app.home```. 

Utilizamos o nome ```content@``` para definir que a view que será utilizada é a view *content* root do documento, criada no index.html. o ```@``` indica que é o caminho absoluto da view.

O HTML do state:
```html
<h1>Olá, seu sou um state {{ adjetivo }}</h1>
```

O controller do state:
```js
(function(){
    'use strict';

    angular.module('treinamento')
        .controller(MyStateController);

    MyStateController.$inject = ['$scope'];

    function MyStateController($scope){
        $scope.adjetivo = 'lindão';
    }
})();
```

### Angular $resource
É um módulo client REST para o AngularJS. O Angular $resource, nos fornece todos os métodos HTTP para uma requisição REST. São eles:

* GET (com ID)
  * no $resource: ```service.get```
* GET (is array)
  * no $resource: ```service.query```  
* POST
  * no $resource: ```service.save```
* PUT
  * é necessária uma implementação do método
* DELETE
  * no $resource: ```service.delete``` ou ```service.remove```

Como ficaria a implementação de um serviço na aplicação?

Primeiro devemos instalar como depenência e incluir o módulo $resource em nosso módulo de aplicação:
```sh
$ bower install angular-resource --save
```

```js
(function(){
    'use strict';

    angular.module('treinamento', [
        'ui.router',
        'ngResource'
    ]);
})();
```

Vamos utilizar *JSONPlaceholder* para a efetuar testes com o módulo $resource.
Para declaração do serviço, utilizaremos o padrão:
```js
(function(){
    'use strict';

    angular.module('treinamento')
        .factory('PostsService', PostsService);
    
    PostsService.$inject = ['$resource'];

    function PostsService($resource){
        var service = $resource('https://jsonplaceholder.typicode.com/posts/:id', {id: '@id'}, {
            put : {
                method : 'PUT'
            }
        });

        return service;
    }
})();
```

Onde podemos analizar o método ```$resource(url, parametros, implementação)```, onde:
* url: é a url, parametrizada ou não, para qual o resource efetuará as chamadas
* parametros: caso a url tenha parametros, deverão ser listados neste objeto
* implementação: podemos sobreescrever os métodos originais do ```$resource``` ou imeplementar novos, como no caso do PUT

#### Utilizando o $resource
##### Implementação 1: Controller
Implementaremos primeiramente no controller, implementação esta que independente do tempo que o ```$resource``` levará para entregar a resposta, o state e por sua vez a view será entregue primeiro.
```js
(function(){
    'use strict';

    angular.module('treinamento')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'PostsService'];

    function HomeController($scope, PostsService){
        
        $scope.posts = [];

        PostsService.query().$promise.then(fnSuccess, fnError);

        function fnSuccess(data){
            $scope.posts = data;
        }

        function fnError(){

        }

    }
})();
```

```html
<h1>Oi seu sou a HOME</h1>
<ul>
    <li ng-repeat="post in posts">{{ post.title }}</li>
</ul>
```


##### Implementação 2: Dependencia do state
Com esta implementação, o state e por sua vez a view, não serão entregues até que o ```$resource``` tenha entregue a resposta da requisição.
```js
(function(){
    'use strict';

    angular.module('treinamento')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider){
        $stateProvider.state('app.empresa', {
            parent : 'app',
            url : '/empresa',
            views : {
                'content@' : {
                    templateUrl : '/scripts/app/empresa/empresa.html',
                    controller : 'EmpresaController'
                }
            },
            resolve : {
                photosList : ['$q', 'PhotosService', function($q, PhotosService){
                    var deferred = $q.defer();

                    PhotosService.query().$promise.then(fnSuccess, fnError);

                    function fnSuccess(data){
                        deferred.resolve(data);
                    }

                    function fnError(){

                    }

                    return deferred.promise;
                }]
            }
        })
    }

})();
```

```js
(function(){
    'use strict';

    angular.module('treinamento')
        .controller('EmpresaController', EmpresaController);

    EmpresaController.$inject = ['$scope', 'photoslist'];

    function EmpresaController($scope, photoslist){
        $scope.photos = photoslist;
    }
})();
```

```html
<h1>Oi seu sou a EMPRESA</h1>
<ul>
    <li ng-repeat="photo in photos">{{ photo.title }}</li>
</ul>
```