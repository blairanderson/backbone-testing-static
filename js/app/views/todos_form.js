define(['jquery', 'backbone', 'models/todo'], function($, Backbone, Todo) {
    var FormView = Backbone.View.extend({
        initialize: function() {
            this.render()
        }

        , events: {
            'click #todo-submit': 'submitForm'
        }

        , render: function() {
            $(this.el).html(this.template())
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
            return '<form><input type="text" id="todo-text" placeholder="Enter a Todo"><input type="text" id="todo-due-at" data-kal="direction: &quot;today-future&quot;" placeholder="Due at" class="auto-kal"><input type="submit" id="todo-submit" value="Submit"></form>'
        }
    })

    return FormView
})