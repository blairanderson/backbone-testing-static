define(['jquery'
    , 'backbone'
    , 'collections/todos'
    , 'views/todos_form'
    , 'views/todos'
    , 'views/contact_manager', 'views/contact_list_view'], function($, Backbone, Todos, TodosFormView, TodosListView, ContactManagerView, ContactListView) {
    var App = Backbone.View.extend({
        initialize: function() {
            this.todos = new Todos()
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
            this.subView = new ContactListView()
            this.render()
        }
    })

    return App
})