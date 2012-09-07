define(['jquery', 'backbone', 'moment'], function($, Backbone, moment) {
    var TodoView = Backbone.View.extend({
        tagName: 'li'
        , initialize: function() {
            this.render()
        }
        , render: function() {
            $(this.el).html(this.template(this.model.humanizedOutput()))
            return this
        }
        , template: function(json) {
            return _.template("<%= text %> <%= humanizedDueAt %>", json)
        }
    })


    return TodoView
})