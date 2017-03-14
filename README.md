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
```
bower init
```

Para incluir dependencias para o projeto
```
bower install jquery --save
```

## Angular

Instalando o angular

```
$ bower install angular --save
```

Usa-se 'use strict' para forcar o javascript a usar regras mais restritar, negando "gambiarras".

States sao os estados da sua pagina, ou seja, como se fosse uma aba dentro da sua pagina. `E como trocar de pagina
mas permanecendo na mesma (Single Page Aplication).


A seguir algumas configuracoes


* Usar um modulo existente
```
angular.module('SeuModulo')
```

* Criar um controller

```
 .controller('SeuController', SeuController);
```


* Criando um state e injetando dependecia.

```
      .config(NomeDaConfiguracao); // adicionando uma config ao modulo

    NomeDaConfiguracao.$inject = ['$stateProvider']  // injetando dependencia para o config
    function NomeDaConfiguracao($stateProvider) { // declarando o metodo da configuracao
        $stateProvider.state('app', {
            abstract : true,
            resolve : {}
        });
    }

```


* Criando uma view para demonstrar um conteudo desejado de um html com um link absoluto
  * Primeiro crie uma classe view no index.html
  ```
   <div ui-view="NomeDaView"></div>
  ```
  * Logo depois no arquivo state, preencha a view.
```
views : {
           'NomeDaView@' : {
              templateUrl : '/endereco_da_html_da_view/SuaView.html',
              controller : 'ControllerDaSuaView'
        }
```