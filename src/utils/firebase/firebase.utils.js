import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
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

// Google authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

// Export the getAuth instance
export const auth = getAuth();

// Export the Google sign in popup
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Instantiate firestore
export const db = getFirestore();

// Create a user from firestore authentication
export const createUserDocumentFromAuth = async userAuth => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

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
      });
    } catch (error) {
      console.log('Error creating the user', error.message);
    }
  }
  // If user data exists, return userRef
  return userDocRef;
};
