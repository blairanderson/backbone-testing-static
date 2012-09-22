define(['jquery', 'backbone', 'moment', 'tpl!templates/todo.html'], function($, Backbone, moment, tpl) {
    var TodoView = Backbone.View.extend({
        tagName: 'li'
        , initialize: function() {
            this.render()
        }
        , render: function() {
            $(this.el).html(tpl(this.model.humanizedOutput()))
            return this
        }
    })


    return TodoView
})