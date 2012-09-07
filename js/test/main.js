requirejs.config({
    baseUrl: 'js/lib'
    , shim: {
        'backbone': {
            deps: ['underscore', 'jquery']
            , exports: 'Backbone'
        }
        , 'jasmine-html': {
            deps: ['jasmine']
            , exports: function(jasmine) {
                return this.jasmine
            }
        }
        , 'sinon': {
            exports: 'sinon'
        }
        , 'string_score': 'string'
        , 'kalendae': 'jquery'
    }
    , paths: {
        app: '../app',
        test: '../test',
        models: '../app/models',
        views: '../app/views',
        collections: '../app/collections'
    }
})

requirejs(['test/models/todo', 
    'test/collections/todos', 'test/views/todo_view', 
    'test/views/todos_view',
    'test/views/todos_form_view'], function() {
    var jasmineEnv = jasmine.getEnv()

    var htmlReporter = new jasmine.HtmlReporter()

    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec)
    }
    jasmineEnv.addReporter(htmlReporter)

    jasmineEnv.execute()
})