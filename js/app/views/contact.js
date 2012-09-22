define(['jquery', 'backbone', 'tpl!templates/contact.html'], function($, Backbone, tpl) {
    var ContactView = Backbone.View.extend({
        tagName: 'li'
        , initialize: function(options) {
            if (!options.model) {
                throw new Error("model must be specified")
            }
            this.model.on('change', this.render, this)
            this.render()
        }
        , render: function() {
            $(this.el).html( tpl(this.model.toJSON()) )
            return this
        }
    })


    return ContactView
})