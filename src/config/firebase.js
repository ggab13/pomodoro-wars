// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { collection, addDoc, getFirestore, getDocs } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB0BhbGK2w6HA8DeNjor7uuR2_qrL6I0GE',
  authDomain: 'pomodoro-wars.firebaseapp.com',
  projectId: 'pomodoro-wars',
  storageBucket: 'pomodoro-wars.appspot.com',
  messagingSenderId: '210536611985',
  appId: '1:210536611985:web:ca0b68bef182668ec93f30',
  measurementId: 'G-VFLNP4R1W7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
const user = auth.currentUser;

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Get collection
export const usersCol = collection(db, 'users');

export async function addScore(score) {
  console.log('Add score');
  try {
    const docRef = await addDoc(usersCol, {
      email: user?.email,
      score: score,
      id: user?.uid,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function getScores() {
  console.log('Add score');
  try {
    const docRef = await addDoc(usersCol, {
      email: user?.email,
      score: score,
      id: user?.uid,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
/* export const test = () => addUser(db, email, password); */
