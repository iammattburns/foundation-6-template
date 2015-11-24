module.exports = function(grunt) {
  

  // Project Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssPath: 'css/app.css',
    jsPath: 'js/app.js',
    watch: {
      sass: {
        files: ['scss/**/*.{scss,sass}'],
        tasks: ['sass:dist']
      },
      livereload: {
        files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/**/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: true
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded',
          loadPath: ['node_modules/foundation-sites/scss']
        },
        files: {                         
          '<%= cssPath %>': 'scss/app.scss'
        }
      }
    },
    autoprefixer: {
        dist: {
            files: {
                '<%= cssPath %>': '<%= cssPath %>'
            }
        }
    },
    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          '<%= jsPath %>': ['js/global.js']
        }
      }
    },
    csslint: {
      strict: {
        options: {
          force: true
        },
        src: ['<%= cssPath %>']
      }
    },
  });
  grunt.registerTask('build', ['jshint', 'uglify', 'autoprefixer']);
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
};
