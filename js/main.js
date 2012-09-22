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
        app: '../app'
        , models: '../app/models'
        , views: '../app/views'
        , collections: '../app/collections'
        , router: '../app/router'
        , templates: '../app/templates'
    }
})

requirejs(['jquery', 'backbone', 'router/router'], function($, Backbone, Router) {
    var router = new Router()
    Backbone.history.start()
})