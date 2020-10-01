import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD6z0KEOMVz9HFV-JnbzxSlw_eP0JtaMB8',
  authDomain: 'clone-41235.firebaseapp.com',
  databaseURL: 'https://clone-41235.firebaseio.com',
  projectId: 'clone-41235',
  storageBucket: 'clone-41235.appspot.com',
  messagingSenderId: '426859119425',
  appId: '1:426859119425:web:5562aec2eff9460598d7c0',
  measurementId: 'G-TLECNDW48N',
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
