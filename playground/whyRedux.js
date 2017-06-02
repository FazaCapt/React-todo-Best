var reduxState = {
    searchText: 'Dog',
    showComplete: false,
    todos: [{
        id: 123,
        text: 'walk the dog'
    }]
};

var action = {
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'something else'
}