import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC5nNw1CLai-EJ7UCANNdUeVl_ockehg_4",
  authDomain: "x-o-game-33065.firebaseapp.com",
  projectId: "x-o-game-33065",
  storageBucket: "x-o-game-33065.appspot.com",
  messagingSenderId: "14209521410",
  appId: "1:14209521410:web:421503be98eef2159c141b",
  measurementId: "G-BBGC2PH2L2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
export default firebaseConfig