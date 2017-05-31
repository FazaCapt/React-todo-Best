var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', ()=>{
        expect('TodoApp').toExist();
    });

    it('should add todo to the todos state on handleAdd todo', () => {
        var todoText = 'test text';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
    });

    it('should toggle completed value when handleToggle called', () => {
        var todoData = {
            id: 11,
            text: 'text feature',
            completed: false
        };

        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        // Check that todos first item has completed value of false
        expect(todoApp.state.todos[0].completed).toBe(false);
        // call handle toggle with 11
        todoApp.handleToggle(11);
        // veryfy that value changed
        expect(todoApp.state.todos[0].completed).toBe(true);
    })
});


