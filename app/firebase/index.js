import firebase from 'firebase';

 try{
      var config = {
        apiKey: "AIzaSyDOc4YtEE1yseucf-vO84t5pdPyAfrirxU",
        authDomain: "faza-todo-app.firebaseapp.com",
        databaseURL: "https://faza-todo-app.firebaseio.com",
        projectId: "faza-todo-app",
        storageBucket: "faza-todo-app.appspot.com",
        messagingSenderId: "797247334665"
    };

        firebase.initializeApp(config);

 } catch (e){

 }

export var firebaseRef = firebase.database().ref();
export default firebase;