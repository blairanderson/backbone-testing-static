define(['backbone'], function(Backbone) {
    var Todo = Backbone.Model.extend({
        isPastDue: function() {
            return new Date() > this.get('dueAt')
        }
        , humanizedOutput: function() {
            return _.extend(this.toJSON(), {humanizedDueAt: moment(this.get('dueAt')).fromNow()})
        }
    })

    return Todo
})