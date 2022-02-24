import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDDREEgchgBqvPm1-BRGDb0L86_Upwj3po",
    authDomain: "messanger-gb.firebaseapp.com",
    databaseURL: "https://messanger-gb-default-rtdb.firebaseio.com",
    projectId: "messanger-gb",
    storageBucket: "messanger-gb.appspot.com",
    messagingSenderId: "1020151390230",
    appId: "1:1020151390230:web:c6d44b8bd1f153bac75537",
    measurementId: "G-T3PJY89M91"
};


const firebase = initializeApp(firebaseConfig);

export default firebase;
