requirejs.config({
    baseUrl: 'js/lib'
    , shim: {
        'backbone': {
            deps: ['underscore', 'jquery']
            , exports: 'Backbone'
        }
    }
    , paths: {
        app: '../app'
        , test: '../test'
        , models: '../app/models'
        , views: '../app/views'
        , collections: '../app/collections'
    }
})

requirejs(['models/todo', 'collections/todos', 'views/todos'], function(Todo, Todos, TodosView) {
    describe("TodosView", function() {
        var todo, todos, todosView;

        describe("Fake Clock Test", function() {
            it("should allow a clock to be arbitrarily moved", function() {
                var clock = sinon.useFakeTimers()

                var callback = sinon.spy()

                setTimeout(function() {
                    callback()
                }, 200)

                clock.tick(50)
                expect(callback.notCalled).to.eql(true)

                clock.tick(150)
                expect(callback.calledOnce).to.eql(true)

                clock.restore()
            })
        })

        describe("initial load", function() {
            beforeEach(function() {
                todo = new Todo({text: "Take out the garbage", dueAt: (new Date()).getTime()})
                todos = new Todos()
                todosView = new TodosView({collection: todos})
            })

            it("should render out a ul", function() {
                expect(todosView.el.outerHTML).to.eql('<ul id="#todos"></ul>')
            })

            describe("adding a todo", function() {
                it("should add an li to the ul", function() {
                    todos.add(todo)
                    expect(todosView.el.outerHTML).to.eql("<ul id=\"#todos\"><li>Take out the garbage a few seconds ago</li></ul>")
                })
            })
        })

        describe("from an endpoint with Sinon", function() {
            it("should add 3 li elements to the page", function(done) {
                var todos = new Todos()
                todos.url = "/todos"
                var todosView = new TodosView({collection: todos})
                var mockJSON = [
                    {id: 1, text: "Take out the garbage", dueAt: (new Date).getTime() + 10000}
                    , {id: 2, text: "Do Backbone Training", dueAt: (new Date).getTime() + 20000}
                    , {id: 3, text: "Eat Dinner", dueAt: (new Date).getTime() + 30000}
                ]

                var server = sinon.fakeServer.create()

                todos.fetch().success(function(resp) {
                    expect(todosView.render().el.outerHTML).to.eql("<ul id=\"#todos\"><li>Take out the garbage in a few seconds</li><li>Do Backbone Training in a few seconds</li><li>Eat Dinner in a few seconds</li></ul>")
                    done()
                })

                server.requests[0].respond(200,
                    {"Content-Type": "application/json"},
                    JSON.stringify(mockJSON)
                )

                server.restore()
            })
        })
    })

    mocha
        .globals(['XMLHttpRequest', 'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval']) // acceptable globals
        .run()
})