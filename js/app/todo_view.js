define(['jquery', 'backbone', 'moment'], function($, Backbone, moment) {
    var TodoView = Backbone.View.extend({
        tagName: 'li'
        , events: {
            "click input[type=checkbox]": "toggleCompleted"
        }
        , initialize: function() {
            this.render()
        }
        , render: function() {
            $(this.el).html(this.template(this.model.humanizedOutput()))
            return this
        }
        , template: function(json) {
            return _.template("<%= text %><input type='checkbox' /><%= humanizedDueAt %>", json)
        }
        , toggleCompleted: function() {
            if (this.model.get('completed') === true) {
                this.model.set('completed', false)
                $(this.el).removeClass('completed')
            } else {
                this.model.set('completed', true)
                $(this.el).addClass('completed')
            }
        }
    })


    return TodoView
})