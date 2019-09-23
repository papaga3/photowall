import * as firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAM3YllzfSTN75aCUFXw9DDFNk7VqeMMLQ",
    authDomain: "photowall-demo-16dd8.firebaseapp.com",
    databaseURL: "https://photowall-demo-16dd8.firebaseio.com",
    projectId: "photowall-demo-16dd8",
    storageBucket: "photowall-demo-16dd8.appspot.com",
    messagingSenderId: "371169569232",
    appId: "1:371169569232:web:a4642b0cc22d8793"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export {database};
