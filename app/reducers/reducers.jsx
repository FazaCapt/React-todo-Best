export var searchTextReducer = (state= '', action) => {
    // action.something = 2;
    switch (action.type){
        case 'SET_SEARCH_TEXT':
            return action.searchText;
        default:
            return state;
    };
};

// showCompletedReducer, default false, TOGGLE_SHOW_COMPLETED
export var showCompletedReducers = (state= false, action) => {
    switch (action.type){
        case 'TOGGLE_SHOW_COMPLETED':
            return !state;
        default:
            return state;
    };
};

