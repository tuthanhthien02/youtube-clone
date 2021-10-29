import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBYmePSuVoMsSuFnqjY73HA8_jvI8XMsQU",
    authDomain: "thien-yt-clone.firebaseapp.com",
    projectId: "thien-yt-clone",
    storageBucket: "thien-yt-clone.appspot.com",
    messagingSenderId: "570745847808",
    appId: "1:570745847808:web:95ef53e63f4cf983eed8e5",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
