import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyDOc4YtEE1yseucf-vO84t5pdPyAfrirxU",
    authDomain: "faza-todo-app.firebaseapp.com",
    databaseURL: "https://faza-todo-app.firebaseio.com",
    projectId: "faza-todo-app",
    storageBucket: "faza-todo-app.appspot.com",
    messagingSenderId: "797247334665"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();


firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Faza',
        age: 25
    },
    // todos: {
    //    '123abc': {
    //         id: '123abc',
    //         text: 'Film some vids'
    //     }
    // }
});


// var notesRef = firebaseRef.child('notes');

var todosRef = firebaseRef.child('todo');

todosRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'Todo 1'
});

todosRef.push({
    text: 'Todo 2'
});









// var newNoteRef = notesRef.push();
// newNoteRef.set({
//     text: 'Walk the dog'
// });

// notesRef.on('child_added', (snapshot) => {
//     console.log('child_added', snapshot.key, snapshot.val());
// });

// notesRef.on('child_changed', (snapshot) => {
//     console.log('child_changed', snapshot.key, snapshot.val());
// });;

// notesRef.on('child_removed', (snapshot) => {
//     console.log('child_removed', snapshot.key, snapshot.val());
// });;



var newNoteRef = notesRef.push({
    text: 'Walk the dog'
});

console.log('Todo ID: ', newNoteRef.key);