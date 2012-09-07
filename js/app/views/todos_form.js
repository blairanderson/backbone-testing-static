define(['jquery', 'kalendae', 'backbone', 'models/todo'], function($, kalendae, Backbone, Todo) {
    var FormView = Backbone.View.extend({
        initialize: function() {
            this.render()
        }

        , events: {
            'click #todo-submit': 'submitForm'
        }

        , render: function() {
            $(this.el).html(this.template())
            $(this.el).find('#todo-due-at').kalendae({direction: 'today-future'})

            return this
        }

        , submitForm: function(e) {
            e.preventDefault()
            var todoText = this.$('#todo-text')
            var todoDueAt = this.$('#todo-due-at')

            var todo = new Todo({text: todoText.val(), dueAt: new Date(todoDueAt.val())})
            todoText.val('')
            todoDueAt.val('')
            this.collection.add(todo)

        }

        , template: function() {
            return '<form><input type="text" id="todo-text" placeholder="Enter a Todo"><input type="text" id="todo-due-at" placeholder="Due at"><input type="submit" id="todo-submit" value="Submit"></form>'
        }
    })

    return FormView
})