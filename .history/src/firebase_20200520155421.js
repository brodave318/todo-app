import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBGeXoQnUdStKIPFRryxlQX-azJ9Emr6Jw",
  authDomain: "todo-app-52baa.firebaseapp.com",
  databaseURL: "https://todo-app-52baa.firebaseio.com",
  projectId: "todo-app-52baa",
  storageBucket: "todo-app-52baa.appspot.com",
  messagingSenderId: "313807322009",
  appId: "1:313807322009:web:6916ad031b748af918f108"
})

const db = firebaseApp.firestore()

export default db