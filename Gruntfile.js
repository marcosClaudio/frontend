module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'http-server' : {
      dev : {
        root : './',
        port : '9000',
        //host : 'localhost',
        host : '0.0.0.0',
        showDir : true,
        autoIndex : true,
        ext : 'html',
        runInBackground : true,
        openBrowser : false
      }
    },
    injector : {
      dev : {
        files : {
          'index.html': ['assets/js/*.js', 'assets/css/*.css']
        }
      }
    },
    watch : {
      inject : {
        files :  ['assets/js/*.js', 'assets/css/*.css'],
        tasks : ['injector:dev']
      }
    }

  });

  // Default task(s).
  grunt.registerTask('default', [
    'injector',
    'http-server',
    'watch'
    ]);

};