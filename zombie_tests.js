var Browser = require('zombie')
var mocha = require('mocha')
var should = require('should')

var browser = new Browser()

describe("adding a todo", function() {
    it("should appear on the page", function(done) {
        browser.visit("http://localhost:8000", function() {
            browser.clickLink("Todos", function() {
                browser.fill('#todo-text', "Teach Backbone training").pressButton("Submit", function() {
                    browser.text("li").should.include("Teach Backbone training")
                    done()
                })
            })
        })
    })
})