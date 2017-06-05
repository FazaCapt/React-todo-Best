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

firebase.database().ref().set({
    appName: 'Todo App'
});