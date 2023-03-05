import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// DDK web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHW1CWgDr8_DVVNQHrXxkPNx4mPZjIhoo", //firebase docs say that its ok to keep it here.
  authDomain: "ddk-db-be072.firebaseapp.com",
  projectId: "ddk-db-be072",
  storageBucket: "ddk-db-be072.appspot.com",
  messagingSenderId: "47115400117",
  appId: "1:47115400117:web:f48194bc57dd8836ad1ffc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Create an instance of the Google provider object
//https://firebase.google.com/docs/auth/web/google-signin?hl=en&authuser=0
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);