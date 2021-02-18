import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDglWn_JKHcYl-_qOnKpi_kMDR3Wl3gKrI",
    authDomain: "crud-96260.firebaseapp.com",
    projectId: "crud-96260",
    storageBucket: "crud-96260.appspot.com",
    messagingSenderId: "996047937814",
    appId: "1:996047937814:web:8f829823993dcbd221f037"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)