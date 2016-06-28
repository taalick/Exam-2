module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

     concat: {
      options: {
        separator: ';'
      },
      js: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.main.js' 
      },
      scss: {
        src: ['stylesheets/src/*.scss'],
        dest: 'stylesheets/dist/style.main.scss'
      }

    },

    uglify: {      
        dist: {
          src: ['js/dist/script.main.js'],
          dest: 'js/dist/script.main.min.js'
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
        // We watch and compile sass files as normal but don't live reload here
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