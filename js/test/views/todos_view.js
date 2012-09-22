define(['jasmine-html'
    , 'sinon' 
    , 'models/todo'
    , 'collections/todos'
    , 'views/todos'], function(jasmine, sinon, Todo, Todos, TodosView) {
    describe("TodosView", function() {
        var todo, todos, todosView

        describe("Fake Clock Test", function() {
            it("should allow a clock to be arbitrarily moved", function() {
                // var clock = sinon.useFakeTimers()

                // var callback = sinon.spy()

                setTimeout(function() {
                    // callback()
                }, 200)

                // clock.tick(50)
                // expect(callback.notCalled).toBeTruthy()

                // clock.tick(150)
                expect(callback.calledOnce).toBeTruthy()

                // clock.restore()
            })

        })
        describe("initial load", function() {
            beforeEach(function() {
                todo = new Todo({text: "Take out the garbage", dueAt: (new Date()).getTime()})
                todos = new Todos()
                todosView = new TodosView({collection: todos})
            })

            it("should render out a ul", function() {
                expect(todosView.el.outerHTML).toContain('<ul id="#todos">')
            })

            describe("adding a todo", function() {
                it("should add an li to the ul", function() {
                    todos.add(todo)
                    expect(todosView.el.outerHTML).toContain("<li>")
                })
            })
        })

        describe("from an endpoint with Sinon", function() {
            it("should add 3 li elements to the page and have 3 elements", function() {
                var complete, server;
                var todos = new Todos()
                todos.url = "/todos"
                var todosView = new TodosView({collection: todos})
                var mockJSON = [
                    {id: 1, text: "Take out the garbage", dueAt: (new Date).getTime() + 10000}
                    , {id: 2, text: "Do Backbone Training", dueAt: (new Date).getTime() + 20000}
                    , {id: 3, text: "Eat Dinner", dueAt: (new Date).getTime() + 30000}
                ]

                runs(function() {
                    // server = sinon.fakeServer.create()
                    complete = false
                    todos.fetch({success: function() {
                        complete = true
                    }})
                })

                waitsFor(function() {
                    // server.requests[0].respond(200,
                    //     {"Content-Type": "application/json"},
                    //     JSON.stringify(mockJSON)
                    // )
                    return complete
                })

                runs(function() {
                    expect(todosView.collection.models.length).toEqual(3)
                    expect(todosView.render().el.outerHTML).toContain("Do Backbone Training")
                    // server.restore()
                })
            })
        })
    })
})