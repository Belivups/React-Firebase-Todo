import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC5pZkJya0joHe1BrDrqrmmRjSgoxrUzmk",
    authDomain: "belivup-todo-app.firebaseapp.com",
    projectId: "belivup-todo-app",
    storageBucket: "belivup-todo-app.appspot.com",
    messagingSenderId: "435237149863",
    appId: "1:435237149863:web:84a2770a378ddaf1cc8f82",
    measurementId: "G-CRY5BPWEP6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
