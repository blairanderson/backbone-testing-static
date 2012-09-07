define(['backbone', 'views/app'], function(Backbone, App) {
    var Router = Backbone.Router.extend({
        initialize: function() {
            this.app = new App({el: $('#content')})
        }

        , routes: {
            'todos': 'todos'
            , 'contact_manager': 'contactManager'
        }

        , todos: function() {
            this.app.initTodos()
        }

        , contactManager: function() {
            this.app.initContactManager()
        }
    })

    return Router
})