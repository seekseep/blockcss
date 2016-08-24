module.exports = function(grunt) {

    'use strict';
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks("grunt-contrib-watch");

    var entryStylusFilePath

    // setting
    grunt.initConfig({

        stylus: {
            compile: {
                options: {
                    compress: true,
                },
                files: {
                    './dist/blockscss.css': './stylus/blockscss.styl', // 1:1 compile
                }
            }
        },

        watch: {
            stylus: {
                files: ['stylus/*.styl'],
                tasks: ['stylus']
            }
        }
    });

    // do task
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['stylus']);
};
