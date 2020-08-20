import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBsbpmmn222QZFcAsoETUhSMNnuE0y0sW8",
  authDomain: "tiktok-clone-feded.firebaseapp.com",
  databaseURL: "https://tiktok-clone-feded.firebaseio.com",
  projectId: "tiktok-clone-feded",
  storageBucket: "tiktok-clone-feded.appspot.com",
  messagingSenderId: "288782923722",
  appId: "1:288782923722:web:d535677215960369528133",
  measurementId: "G-H03F8QWX7P"
};

const firebaseApp = 
firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;

