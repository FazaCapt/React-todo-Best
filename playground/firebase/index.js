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
});

// firebaseRef.remove();
// firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
//     version: '3.0.1',
//     name: null
// });


firebaseRef.update({
    isRunning: null
});

firebaseRef.child('user/age').remove();














// firebaseRef.child('app').update({name: 'Firebase'});

// firebaseRef.child('user').update({name: 'Mamah'});




// firebaseRef.update({
//     'app/name' : 'React Todo',
//     'user/name' : 'Qipli'
// });

// .then(() => {
//     console.log('Set worked!');
// }, (e) => {
//     console.log('Set failed'); 
// });

// firebaseRef.update({
//     isRunning: false,
//     app: {
//         name: 'Todo Application'
//     }
// });

// firebaseRef.update({
//     isRunning: false,
//         'app/name' : 'Todo Yuhuu'
// });

// firebaseRef.child('app').update({
//     name: 'Todo Asyik'
// }).then(() => {
//     console.log('Update Worked');
// }, (e) => {
//     console.log('Update failed');
// })









// firebaseRef.set({
//     appName: 'Todo Application'
// });


// firebaseRef.child('user').set({
//     name: 'Panji'
// });


// firebaseRef.child('app').set({
//     name: 'Todo Application'
// });