define(['jquery', 'backbone', 'collections/todos', 'views/todos_form', 'views/todos'], function($, Backbone, Todos, TodosFormView, TodosListView) {
    var App = Backbone.View.extend({
        initialize: function() {
            this.todos = new Todos()
            this.initTodos()
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
    })

    return App
})