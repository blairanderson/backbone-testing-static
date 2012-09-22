define(['jquery', 'jasmine-html', 'collections/todos', 'views/todos_form'], function($, jasmine, Todos, TodosFormView) {
    describe("TodosFormView", function() {
        it("should allow a user to submit a todo with some text", function() {
            var todos = new Todos()
            var todosFormView = new TodosFormView({collection: todos})

            expect(todosFormView.collection.models.length).toEqual(0)

            $(todosFormView.el).find('#todo-text').val('Do some homework')
            $(todosFormView.el).find('form input[type="submit"]').trigger('click')
            
            expect($(todosFormView.el).find('#todo-text').val()).toEqual("")
            expect(todos.models.length).toEqual(1)
            expect(todos.models[0].get('text')).toEqual("Do some homework")
        })
    }) 
})