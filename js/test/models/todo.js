define(['jasmine-html', 'models/todo'], function(jasmine, Todo) {
    describe("Todo", function() {
        describe("new Todo", function() {
            var todo = new Todo()

            it("is a valid object", function() {
                expect(todo).toBeDefined()
            })

            it("should not be completed", function() {
                expect(todo.get('completed')).toBeDefined()
                expect(todo.get('completed')).toBeFalsy()
            })
        })


        describe("existing Todo", function() {
            var todo;

            beforeEach(function() {
                todo = new Todo({text: "Take out the trash"})
            })

            it("should have text equal to Take out the trash", function() {
                todo.set('completed', true)
                expect(todo.get('text')).toEqual('Take out the trash')
            })

            it("should not be completed", function() {
                expect(todo.get('completed')).toBeFalsy()
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