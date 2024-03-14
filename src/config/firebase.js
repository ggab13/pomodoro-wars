// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
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
const analytics = getAnalytics(app);
