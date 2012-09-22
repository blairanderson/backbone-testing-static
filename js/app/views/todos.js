define(['jquery', 'backbone', 'views/todo'], function($, Backbone, TodoView) {
    var TodosView = Backbone.View.extend({
        tagName: "ul"

        , id: "todos"

        , initialize: function() {
            this.collection.on('add', this.render, this)
            this.render()
            this.todo_views = []
        }
        , render: function() {
            var $this = this
            $($this.el).empty()
            this.collection.forEach(function(model) {
                var todo_view = new TodoView({model: model})
                $($this.el).append(todo_view.el)
            })
            return this
        }
    })

    return TodosView
})