define(['jasmine-html', 'collections/todos', 'models/todo'], function(jasmine, Todos, Todo) {
    describe("Todos Collection", function() {
        describe("new Todos Collection", function() {
            var todos

            beforeEach(function() {
                todos = new Todos()
            })

            it("is a valid object", function() {
                expect(todos).toBeDefined()
            })

            it("should contain Todo objects", function() {
                expect(todos.model).toEqual(Todo)
            })

            it("should originally be empty", function() {
                expect(todos.length).toEqual(0)
            })

            it("should allow a Todo to be added", function() {
                expect(todos.length).toEqual(0)
                todos.add(new Todo())
            })

            it("should allow retrieval of only completed Todos", function() {
                todo_1 = new Todo({completed: true})
                todo_2 = new Todo({completed: false})
                todo_3 = new Todo({completed: true})
                todos.add([todo_1, todo_2, todo_3])

                complete_todos = todos.getComplete()

                expect(complete_todos.length).toEqual(2)
            })

            it("should allow retrieval of only incomplete Todos", function() {
                todo_1 = new Todo({completed: true})
                todo_2 = new Todo({completed: false})
                todo_3 = new Todo({completed: true})
                todos.add([todo_1, todo_2, todo_3])

                incomplete_todos = todos.getIncomplete()

                expect(incomplete_todos.length).toEqual(1)
            })

            it("should sort by the dueAt date by default", function() {
                date = new Date().getTime()
                todo_1 = new Todo({text: "Trash", completed: true, dueAt: date + 300})
                todo_2 = new Todo({text: "Homework", completed: false, dueAt: date + 100})
                todo_3 = new Todo({text: "Walk Dog", completed: true, dueAt: date - 200})

                todos.add([todo_1, todo_2, todo_3])

                expect(todos.pluck('text')).toEqual(["Walk Dog", "Homework", "Trash"])
            })
        })
    })
})