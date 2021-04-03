import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyByOZZiZn02rEoW72Sbo8hKRl2l4a7O1r0",
	authDomain: "e-commerce-db-68fe1.firebaseapp.com",
	projectId: "e-commerce-db-68fe1",
	storageBucket: "e-commerce-db-68fe1.appspot.com",
	messagingSenderId: "283453957844",
	appId: "1:283453957844:web:ec4842993544b7f8cfbd41",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
