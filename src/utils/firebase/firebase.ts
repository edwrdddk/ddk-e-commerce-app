import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  User
} from "firebase/auth";
import {
  getFirestore,
  doc, // this method allows to retrieve documents inside firestore database.
  getDoc, // getting the documents data.
  setDoc, // setting the documents data.
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot
} from "firebase/firestore";
import { Category } from "../../store/categories/category.types";

// DDK web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHW1CWgDr8_DVVNQHrXxkPNx4mPZjIhoo", // firebase docs say that its ok to keep it here.
  authDomain: "ddk-db-be072.firebaseapp.com",
  projectId: "ddk-db-be072",
  storageBucket: "ddk-db-be072.appspot.com",
  messagingSenderId: "47115400117",
  appId: "1:47115400117:web:f48194bc57dd8836ad1ffc",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Create an instance of the Google provider object.
// https://firebase.google.com/docs/auth/web/google-signin?hl=en&authuser=0
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Initialize Firebase Authentication.
export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//Instantiate a db.
export const db = getFirestore();

//data => firestore db.
export type objectsToAdd = {
  title: string;
}

export const addCollectionsAndDocuments = async <T extends objectsToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object); //set this location(docRef) with the value(object)
  });

  await batch.commit();
  console.log("done");
};

//get products & categories from firestore db.
export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category); // casting a value.

  // const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
  //   const {title, items } = docSnapshot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {});

  // return categoryMap;
};

//in order to use a db.
export type AdditionalInfo = {
  displayName?: string;
}

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
}

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInfo = {} as AdditionalInfo
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return; //if we don't get user auth we want to exit our code.

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef); // Snapshot is kind of like a data. Also a special type of object like reference.

  // if user data doesn't exists
  // create  / set the document with the data from userAuth in my collection.
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth; // Destructuring. Also comming from console.log responce in sing-in.jsx
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error);
    }
  }

  //if user data exists
  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

// userDocRef comment.
// first we need to see if there is exiting document reference.
// reference beeing a special type of object that firestore use when talking about actual instance of a document.
// doc takes 3 arguments(1-database, 2 - collections, 3 - identifier(in this case users uid comming from console.log responce in sing-in.jsx)).

// docs about setting data (+ difference between setDoc and addDoc)
// https://firebase.google.com/docs/firestore/manage-data/add-data

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//Sign In
export const singInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

//Sign out
export const signOutUser = async () => await signOut(auth);

//To use an observable listener
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};








// JS
// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";
// import {
//   getFirestore,
//   doc, // this method allows to retrieve documents inside firestore database.
//   getDoc, // getting the documents data.
//   setDoc, // setting the documents data.
//   collection,
//   writeBatch,
//   query,
//   getDocs,
// } from "firebase/firestore";

// // DDK web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAHW1CWgDr8_DVVNQHrXxkPNx4mPZjIhoo", // firebase docs say that its ok to keep it here.
//   authDomain: "ddk-db-be072.firebaseapp.com",
//   projectId: "ddk-db-be072",
//   storageBucket: "ddk-db-be072.appspot.com",
//   messagingSenderId: "47115400117",
//   appId: "1:47115400117:web:f48194bc57dd8836ad1ffc",
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);

// // Create an instance of the Google provider object.
// // https://firebase.google.com/docs/auth/web/google-signin?hl=en&authuser=0
// const googleProvider = new GoogleAuthProvider();
// googleProvider.setCustomParameters({
//   prompt: "select_account",
// });

// // Initialize Firebase Authentication.
// export const auth = getAuth();

// export const signInWithGooglePopup = () =>
//   signInWithPopup(auth, googleProvider);

// //Instantiate a db.
// export const db = getFirestore();

// //data => firestore db.
// export const addCollectionsAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = collection(db, collectionKey);
//   const batch = writeBatch(db);

//   objectsToAdd.forEach((object) => {
//     const docRef = doc(collectionRef, object.title.toLowerCase());
//     batch.set(docRef, object); //set this location(docRef) with the value(object)
//   });

//   await batch.commit();
//   console.log("done");
// };

// //get products & categories from firestore db.
// export const getCategoriesAndDocuments = async () => {
//   const collectionRef = collection(db, "categories");
//   const q = query(collectionRef);

//   const querySnapshot = await getDocs(q);
//   return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

//   // const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
//   //   const {title, items } = docSnapshot.data();
//   //   acc[title.toLowerCase()] = items;
//   //   return acc;
//   // }, {});

//   // return categoryMap;
// };

// //in order to use a db.
// export const createUserDocumentFromAuth = async (
//   userAuth,
//   additionalInfo = {}
// ) => {
//   if (!userAuth) return; //if we don't get user auth we want to exit our code.

//   const userDocRef = doc(db, "users", userAuth.uid);

//   const userSnapshot = await getDoc(userDocRef); // Snapshot is kind of like a data. Also a special type of object like reference.

//   // if user data doesn't exists
//   // create  / set the document with the data from userAuth in my collection.
//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth; // Destructuring. Also comming from console.log responce in sing-in.jsx
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//         ...additionalInfo,
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   //if user data exists
//   return userSnapshot;
// };

// // userDocRef comment.
// // first we need to see if there is exiting document reference.
// // reference beeing a special type of object that firestore use when talking about actual instance of a document.
// // doc takes 3 arguments(1-database, 2 - collections, 3 - identifier(in this case users uid comming from console.log responce in sing-in.jsx)).

// // docs about setting data (+ difference between setDoc and addDoc)
// // https://firebase.google.com/docs/firestore/manage-data/add-data

// export const createAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   return await createUserWithEmailAndPassword(auth, email, password);
// };

// //Sign In
// export const singInAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   return await signInWithEmailAndPassword(auth, email, password);
// };

// //Sign out
// export const signOutUser = async () => await signOut(auth);

// //To use an observable listener
// export const onAuthStateChangedListener = (callback) =>
//   onAuthStateChanged(auth, callback);

// export const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = onAuthStateChanged(
//       auth,
//       (userAuth) => {
//         unsubscribe();
//         resolve(userAuth);
//       },
//       reject
//     );
//   });
// };
