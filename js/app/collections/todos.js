define(['backbone', 'models/todo'], function(Backbone, Todo) {
    var Todos = Backbone.Collection.extend({
        url: '/todos'
        , model: Todo
        , defaults: {
            complete: false
        }
        , getComplete: function() {
            return this.where({"completed": true})
        }

        , getIncomplete: function() {
            return this.where({"completed": false})
        }
    })

    return Todos
})