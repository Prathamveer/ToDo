import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAwtZFWQ3A77wmBGc1X52nDT2cIAfgHIBs",
    authDomain: "todoapp-6b185.firebaseapp.com",
    databaseURL: "https://todoapp-6b185.firebaseio.com",
    projectId: "todoapp-6b185",
    storageBucket: "todoapp-6b185.appspot.com",
    messagingSenderId: "382978760967",
    appId: "1:382978760967:web:eb9447203fbf4bd42665a2",
    measurementId: "G-EM5980Y35C"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();