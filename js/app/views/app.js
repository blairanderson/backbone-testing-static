define(['jquery'
    , 'backbone'
    , 'collections/todos'
    , 'views/todos_form'
    , 'views/todos'
    , 'views/contact_manager'], function($, Backbone, Todos, TodosFormView, TodosListView, ContactManagerView) {
    var App = Backbone.View.extend({
        initialize: function() {
            this.todos = new Todos()
            this.initTodos()
        }

        , events: {
            'click #switch-todos': 'initTodos'
            , 'click #switch-contact-manager': 'initContactManager'
        }

        , render: function() {
            $(this.el).find('#main-view').html(this.mainView.el)
            $(this.el).find('#sub-view').html(this.subView.el)
            return this;
        }

        , initTodos: function() {
            this.mainView = new TodosFormView({collection: this.todos})
            this.subView = new TodosListView({collection: this.todos})
            this.render()
        }

        , initContactManager: function() {
            this.mainView = new ContactManagerView()
            this.subView = null
            this.render()
        }
    })

    return App
})