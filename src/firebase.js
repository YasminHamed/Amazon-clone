// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyBlPSrDA_8F3S3ImN5koNk_QZsVc8CyETA",
//     authDomain: "clone-6dbb6.firebaseapp.com",
//     projectId: "clone-6dbb6",
//     storageBucket: "clone-6dbb6.appspot.com",
//     messagingSenderId: "1065874915705",
//     appId: "1:1065874915705:web:3e69c661fefea20f2aefa8"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBlPSrDA_8F3S3ImN5koNk_QZsVc8CyETA",
    authDomain: "clone-6dbb6.firebaseapp.com",
    projectId: "clone-6dbb6",
    storageBucket: "clone-6dbb6.appspot.com",
    messagingSenderId: "1065874915705",
    appId: "1:1065874915705:web:3e69c661fefea20f2aefa8"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };