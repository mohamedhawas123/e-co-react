import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyDXuOYpsVPXYLz1Fg2HSNkQ97Ucfswcpq0",
    authDomain: "shop-db-4f506.firebaseapp.com",
    databaseURL: "https://shop-db-4f506.firebaseio.com",
    projectId: "shop-db-4f506",
    storageBucket: "shop-db-4f506.appspot.com",
    messagingSenderId: "860861898497",
    appId: "1:860861898497:web:b88283afb0a094d5264500",
    measurementId: "G-8YFQPSMNSE"
  };


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const proviver = new firebase.auth.GoogleAuthProvider();
proviver.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(proviver)


export default firebase