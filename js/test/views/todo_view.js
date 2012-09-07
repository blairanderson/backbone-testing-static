define(['jasmine-html', 'models/todo', 'views/todo'], function(jasmine, Todo, TodoView) {
    describe("TodoView", function() {
        describe("initial load", function() {
            var todo = new Todo({text: "Take out the garbage", dueAt: new Date()})
            var todoView = new TodoView({model: todo})

            it("should render out an li", function() {
                expect(todoView.el.outerHTML).toContain("<li>")
            })

            it("should contain the todo text", function() {
                expect(todoView.el.outerHTML).toContain("Take out the garbage")
            })
        })
    })
})