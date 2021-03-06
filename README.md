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