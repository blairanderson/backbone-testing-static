define(['jquery', 'backbone', 'app/todo_view'], function($, Backbone, TodoView) {
    var TodosView = Backbone.View.extend({
        tagName: "ul"

        , initialize: function() {
            this.collection.on('add', this.render, this)
        }
        , render: function() {
            $this = this
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