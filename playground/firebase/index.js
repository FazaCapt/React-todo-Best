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
    }
});

firebaseRef.child('user').on('value', (snapshot) => {
    console.log('User ref changed', snapshot.val());
});

firebaseRef.child('user').update({name: 'Panji'});
firebaseRef.child('app').update({name: 'something else'});

// firebaseRef.child('app').once('value').then((snapshot) => {
//     console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//     console.log('Unable to fetch value', e);
// });

// firebaseRef.on('value', (snapshot) => {
//     console.log('Got value', snapshot.val());
// });

// var logData = (snapshot) => {
//     console.log('Got value', snapshot.val());
// };

// firebase.on('value', logData);


// firebaseRef.off();

// firebaseRef.update({isRunning: false});