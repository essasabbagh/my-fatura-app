// // src/firebase.js

import firebase from "firebase";
// import { ref, onUnmounted } from "vue";

const firebaseConfig = {
  apiKey: "AIzaSyAdPMN2ChnS1oJm00Xm2xiYGxb-dXnFZBM",
  authDomain: "my-fatura.firebaseapp.com",
  projectId: "my-fatura",
  storageBucket: "my-fatura.appspot.com",
  messagingSenderId: "1071383409038",
  appId: "1:1071383409038:web:24b142ac1625d81049f4df",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const usersCollection = db.collection("users");

export const database = db;
export const Auth = auth;
export const Users = db.collection("users");

// Users Tools
export const signIn = (email, pass) => {
  return auth.createUserWithEmailAndPassword(email, pass);
};
export const logOut = () => {
  return auth.signOut();
};
export const logIn = (email, pass) => {
  return auth.signInWithEmailAndPassword(email, pass);
};
export const saveUser = (user) => {
  return usersCollection.add(user);
};

// listen for auth status changes
// export const isAuth = auth.onAuthStateChanged((user) => {
//   if (user) {
//     console.log("user logged in: ", user.email, user.uid);
//     return true;
//   } else {
//     console.log("user logged out");
//     return false;
//   }
// });
// user Tools end

// categories tools
const categoriesCollection = db.collection("categories");

export const saveCat = (cat) => {
  return categoriesCollection.add(cat);
};

// export const getCategories = async (id) => {
//   const user = await usersCollection.doc(id).get();
//   return user.exists ? user.data() : null;
// };

// export const getUser = async (id) => {
//   const user = await usersCollection.doc(id).get();
//   return user.exists ? user.data() : null;
// };

// export const updateUser = (id, user) => {
//   return usersCollection.doc(id).update(user);
// };

// export const deleteUser = (id) => {
//   return usersCollection.doc(id).delete();
// };

// export const useLoadUsers = () => {
//   const users = ref([]);
//   const close = usersCollection.onSnapshot((snapshot) => {
//     users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   });
//   onUnmounted(close);
//   return users;
// };
