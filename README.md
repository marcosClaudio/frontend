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
