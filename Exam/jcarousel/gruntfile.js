module.exports = function(grunt) {

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

     concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/jquery.jcarousel-core.js', 'js/src/jquery.jcarousel-scrollintoview.js', 'js/src/jquery.jcarousel-control.js', 'js/src/jquery.jcarousel-pagination.js', 'js/src/jquery.jcarousel-autoscroll.js'],
        dest: 'js/dist/jquery.jcarousel.js'
      },
      scss: {
        src: ['stylesheets/src/*.scss'],
        dest: 'stylesheets/dist/style.main.scss'
      },
    },

    uglify: {      
        dist: {
          src: ['js/dist/jquery.jcarousel.js'],
          dest: 'js/dist/jquery.jcarousel.min.js'
        }
      },      
    
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'stylesheets/dist',
          src: ['style.main.scss'],
          dest: 'stylesheets/dist',
          ext: '.main.css'
        }]
        }
    },

     cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'stylesheets/dist/style.main.min.css': ['stylesheets/dist/style.main.css']
        }
      }
    },


    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['stylesheets/src/*.scss'],
        tasks: ['concat','sass','cssmin'],       
      },
      js: {
        // We watch and compile js files as normal but don't live reload here
        files: ['js/src/*.js'],
        tasks: ['concat', 'uglify'],       
      }
    },
    
   
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch'); 
 
  grunt.registerTask('default', ['concat', 'sass', 'cssmin', 'uglify']);
};