define(['jquery', 'backbone', 'collections/contacts', 'views/contact'], function($, Backbone, Contacts, ContactView) {
    var ContactListView = Backbone.View.extend({
        tagName: 'ul'
        , id: 'contacts'
        , initialize: function(options) {
            this.collection = new Contacts([
            {
                first_name: "Gerred"
                , last_name: "Dillon"
                , address: "123 Street St"
                , phone: "720.840.1303"
                , email: "hello@gerred.com"
            }
            , {
                first_name: "Mittens"
                , last_name: "Cat"
                , address: "902 Pearl St"
                , phone: "448392039292"
                , email: "mittens@imacat.com"             
            }
            ])
            window.collection = this.collection
            this.render()
        }
        , render: function() {
            var _this = this
            _this.$el.empty()
            this.collection.forEach(function(contact) {
                console.log(contact)
                var contactView = new ContactView({model: contact})
                _this.$el.append(contactView.el)
            })

            return _this
        }
    })
    return ContactListView
})