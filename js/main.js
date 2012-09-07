requirejs.config({
    baseUrl: 'js/lib'
    , shim: {
        'backbone': {
            deps: ['underscore', 'jquery']
            , exports: 'Backbone'
        },
        'moment': {
            exports: 'moment'
        },
        'string_score': 'string'
        , 'kalendae': 'jquery'
    }
    , paths: {
        app: '../app',
        models: '../app/models',
        views: '../app/views',
        collections: '../app/collections'
    }
})

requirejs(['jquery', 'backbone', 'views/app'], function($, Backbone, App) {
    new App({el: $('#content')})
})