define(['jquery', 'backbone', 'models/todo'], function($, Backbone, Todo) {
    var Todos = Backbone.Collection.extend({
        model: Todo
        , getComplete: function() {
            return this.where({"completed": true})
        }

        , getIncomplete: function() {
            return this.where({"completed": false})
        }
    })

    return Todos
})