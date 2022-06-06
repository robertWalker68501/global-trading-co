import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAGmGySw2yY6PJJbfirHObeyLHnniKaNzE',
  authDomain: 'global-trading-co.firebaseapp.com',
  projectId: 'global-trading-co',
  storageBucket: 'global-trading-co.appspot.com',
  messagingSenderId: '855909458462',
  appId: '1:855909458462:web:cc42c5b00b3418c0c3c40f',
};

// Initialize firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Export the getAuth instance
export const auth = getAuth();

// Google authentication
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// Export the Google sign in popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// Export the sign in with Google redirect
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// Instantiate firestore
export const db = getFirestore();

// Create a user from firestore authentication
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // If user data does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // create / set the document with the data from userAuth
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('Error creating the user', error.message);
    }
  }
  // If user data exists, return userRef
  return userDocRef;
};

// Create a user using email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
