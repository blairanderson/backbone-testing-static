module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-jasmine-task');

    grunt.initConfig({
        requirejs: {
            dir: 'js/build'      
            , appDir: 'js/app'
            , baseUrl: 'js'
            , paths: {
                underscore: 'js/lib/underscore'
                , backbone: 'js/lib/backbone'
                , jquery: 'js/lib/jquery'
                , moment: 'js/lib/moment'
                , kalendae: 'js/lib/kalendae'
            }
            , pragmas: {
                doExclude: true
            }
            , skipModuleInsertion: false
            , optimizeAllPluginResoruces: true
            , findNestedDependencies: true
        }
        , jasmine: {
            all: ["test.html"]
        }
    })
}