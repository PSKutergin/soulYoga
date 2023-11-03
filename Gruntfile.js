module.exports = function (grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dist/style.css': 'src/styles/style.scss'
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/style.min.css': ['dist/style.css']
                }
            }
        },
        concat: {
            dist: {
                src: ['src/scripts/*.js'],
                dest: 'dist/main.js'
            }
        },
        uglify: {
            build: {
                src: 'dist/main.js',
                dest: 'dist/main.min.js'
            }
        },
        clean: {
            css: ['dist/style.css', 'dist/style.css.map'],
            js: ['dist/main.js']
        },
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: 'src/styles/*.scss',
                tasks: ['sass', 'cssmin', 'clean'],
            },
            scripts: {
                files: ['src/scripts/*.js'],
                tasks: ['concat', 'uglify', 'clean'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
};