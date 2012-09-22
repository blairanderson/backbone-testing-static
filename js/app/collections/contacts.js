define(['backbone', 'models/contact'], function(Backbone, Contact) {
    var Contacts = Backbone.Collection.extend({
        url: '/contacts'
        , model: Contact
    })
    return Contacts
})