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

// const firebaseConfig = {
//     apiKey: "AIzaSyCr-TZiTByAeuD-Cn1LBzaVg45qlrmSU4w",
//     authDomain: "clone-2-330701.firebaseapp.com",
//     projectId: "youtube-clone-2-330701",
//     storageBucket: "youtube-clone-2-330701.appspot.com",
//     messagingSenderId: "207906778648",
//     appId: "1:207906778648:web:af865dd10ae01edb7e5d6d",
// };

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
