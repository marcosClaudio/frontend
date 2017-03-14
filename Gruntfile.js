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
      task : {
        files : {
          'index.html': ['assets/js/*.js', 'assets/css/*.css', 'scripts/**/*.js']
        }
      }
    },
    watch : {
      inject : {
        files :  ['assets/js/*.js', 'assets/css/*.css','scripts/**/*.js'],
        tasks : ['injector:task']
      },
      bower : {
        files : ['bower.json'],
        tasks : ['wiredep:task' ]
      }
    },
    wiredep : {
      task : {
        src : ['index.html']
      }
    }

  });

  // Default task(s).
  grunt.registerTask('default', [
    'injector',
    'wiredep:task',
    'http-server',
    'watch'
    ]);

};