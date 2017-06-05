import firebase from 'firebase';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDOc4YtEE1yseucf-vO84t5pdPyAfrirxU",
    authDomain: "faza-todo-app.firebaseapp.com",
    databaseURL: "https://faza-todo-app.firebaseio.com",
    projectId: "faza-todo-app",
    storageBucket: "faza-todo-app.appspot.com",
    messagingSenderId: "797247334665"
  };
  firebase.initializeApp(config);

// {
//     appName : 'Todo App',
//     isRunning: true
// }

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
    }
}).then(() => {
    console.log('Set worked!');
}, (e) => {
    console.log('Set failed'); 
})

// firebaseRef.set({
//     appName: 'Todo Application'
// });


firebaseRef.child('user').set({
    name: 'Panji'
});


firebaseRef.child('app').set({
    name: 'Todo Application'
});