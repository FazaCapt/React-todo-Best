var $ = require('jquery');

module.exports = {
    setTodos: function (todos){
        if ($.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function (){
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try{
            todos = JSON.parse(stringTodos);
        } catch (e){

        }
        return $.isArray(todos) ? todos : []; //lebih singkat
    }
};


//         // ini penjelsan return yang diatas.
//         // if($.isArray(todos)){
//         //     return todos;
//         // } else {
//         //     return[];
//         // }

//         // '[1,2]' => string
//         // [1,2] => Parse

// cara ngecek dibrowser
// localStorage.getItem('todos');