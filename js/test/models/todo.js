define(['jasmine-html', 'models/todo'], function(jasmine, Todo) {
    describe("Todo", function() {
        describe("new Todo", function() {
            var todo = new Todo()

            it("is a valid object", function() {
                expect(todo).toBeDefined()
            })
        })

        describe("existing Todo", function() {
            var todo = new Todo({text: "Take out the trash"})

            it("should have text equal to Take out the trash", function() {
                expect(todo.get('text')).toEqual('Take out the trash')
            })
        })

        describe("due dates", function() {
            var date = new Date()
            var todo

            describe("isPastDue", function() {
                it("should return true when the todo is past due", function() {
                    todo = new Todo({dueAt: new Date().getTime() - 200})
                    expect(todo.isPastDue()).toBeTruthy()
                })

                it("should return false when the todo is not past due", function() {
                    todo = new Todo({dueAt: new Date().getTime() + 10000})
                    expect(todo.isPastDue()).toBeFalsy()
                })
            })
        })
    })
})