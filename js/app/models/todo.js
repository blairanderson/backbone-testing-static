define(['backbone'], function(Backbone) {
    var Todo = Backbone.Model.extend({
        isPastDue: function() {
            return new Date() > this.get('dueAt')
        }
        , humanizedOutput: function() {
            return _.extend(this.toJSON(), {humanizedDueAt: this.humanizedDueAt, humanizedPastDue: this.humanizedPastDue})
        }
        , humanizedDueAt: function() {
            return moment(this.get('dueAt')).fromNow()
        }
        , humanizedPastDue: function() {
            if (this.isPastDue()) return "past-due"
        }
    })

    return Todo
})