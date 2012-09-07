requirejs.config({
    baseUrl: 'js/lib'
    , shim: {
        'backbone': {
            deps: ['underscore', 'jquery']
            , exports: 'Backbone'
        },
        'moment': {
            exports: 'moment'
        }
    }
    , paths: {
        app: '../app'
    }
})

requirejs(['jquery', 'backbone', 'app/todos', 'app/form_view', 'app/todos_view'], function($, Backbone, Todos, FormView, TodosView) {
    var todos = new Todos()
    var formView = new FormView({collection: todos, el: $("form")})
    var todosView = new TodosView({collection: todos, el: $("#todos")})
})