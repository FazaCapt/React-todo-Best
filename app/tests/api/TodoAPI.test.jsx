var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect('TodoAPi').toExist();
    });

    describe('filterTodos', () => {
        var todos = [{
            id: 1,
            text: 'Some text here',
            completed: true
        },
        {
            id: 2,
            text: 'other text here',
            completed: false
        },
        {
            id: 3,
            text: 'Some text here',
            completed: true
        }];

        it('should return all items if showCompleted is true', () => {
            var filterTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filterTodos.length).toBe(3);
        });

        it('should return non-completed todos when showCompleted is false', () => {
            var filterTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filterTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            var filterTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filterTodos[0].completed).toBe(false);
        });

        it('should filter todos by searchText', () => {
            var filterTodos = TodoAPI.filterTodos(todos, true, 'some');
            expect(filterTodos.length).toBe(2);
        });

        it('should filter todos by searchText if uppercase', () => {
            var filterTodos = TodoAPI.filterTodos(todos, true, 'some');
            expect(filterTodos.length).toBe(2);
        });

        it('should return all todos if searchText is empty', () => {
            var filterTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filterTodos.length).toBe(3);
        });
    });


});