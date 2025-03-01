import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDRoTOnN931_UNg6tUA0VOZVOcXsaSWfnE",
  authDomain: "thinkloom-12f76.firebaseapp.com",
  projectId: "thinkloom-12f76",
  storageBucket: "thinkloom-12f76.firebasestorage.app",
  messagingSenderId: "422443075710",
  appId: "1:422443075710:web:719b373550611fe095b02f"
};

const app = initializeApp(firebaseConfig);

// Google Authentication 

const provider = new GoogleAuthProvider()

const auth = getAuth()

export const authWithGoogle = async () => {
    let user = null

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) =>{
        console.log(err)
    })
    return user
}