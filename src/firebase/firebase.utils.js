import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAMiQuKV9Iok6weTPcPzEwbDzuO86RCKUo",
  authDomain: "clockwork-fb.firebaseapp.com",
  projectId: "clockwork-fb",
  storageBucket: "clockwork-fb.appspot.com",
  messagingSenderId: "354255736838",
  appId: "1:354255736838:web:f1cfc3a9b18ba490817387",
  measurementId: "G-DXGT415ZS0",
};

export const createUserProfileDocument = async (userAuth, data) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data,
      });
    } catch (err) {
      console.log("Error creating user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { initializeApp } from "firebase/app";

// const provider = new GoogleAuthProvider();

// const config = {
//   apiKey: "AIzaSyAMiQuKV9Iok6weTPcPzEwbDzuO86RCKUo",
//   authDomain: "clockwork-fb.firebaseapp.com",
//   projectId: "clockwork-fb",
//   storageBucket: "clockwork-fb.appspot.com",
//   messagingSenderId: "354255736838",
//   appId: "1:354255736838:web:f1cfc3a9b18ba490817387",
//   measurementId: "G-DXGT415ZS0",
// };
// const app = initializeApp(config);

// export const auth = getAuth();
// export const signInWithGoogle = () => signInWithPopup(auth, provider);
