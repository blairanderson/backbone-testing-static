define(['jquery', 'backbone'], function($, Backbone) {
    var ContactManagerView = Backbone.View.extend({

        events: {
            'click #todo-submit': 'submitForm'
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
    })

    return ContactManagerView
})