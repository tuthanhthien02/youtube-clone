import firebase from "firebase/compat/app";
import auth from "../firebase";

export const authAPI = {
    loginAuth: async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope(process.env.REACT_APP_YT_SCOPE);

        const res = await auth.signInWithPopup(provider);

        return res;
    },
    logoutAuth: async () => {
        await auth.signOut();

        sessionStorage.removeItem("ytc-access-token");
        sessionStorage.removeItem("ytc-user");
    },
};
