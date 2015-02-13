var globals = require('./config/globals');

module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: globals.config,
        browserify: globals.browserify,
        sass: globals.sass,
        jshint: globals.jshint,
        clean: globals.clean,
        replace: globals.replace,
        copy: globals.copy,
        browserSync: globals.browsersync,
        watch: globals.watch
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('dev', ['build:dev', 'browserSync', 'watch']);

    grunt.registerTask('build', function(env){
        //var tasks = ['clean', 'copy', 'sass', 'replace', 'browserify'];
        env = env || 'prod';

        switch(env){
            case 'dev': 
                grunt.task.run('clean:dev');
                grunt.task.run('copy');
                grunt.task.run('sass:dev');
                grunt.task.run('replace:dev');
                grunt.task.run('browserify:dev');
                break;
            case 'prod': 
                
                break;
            default: 
                throw Error('env must be dev or prod');
                break;
        }
    });
};
