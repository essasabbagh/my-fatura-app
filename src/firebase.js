// src/firebase.js
import firebase from "firebase";
import { ref, onUnmounted } from "vue";

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
const usersCollection = db.collection("users");

export const createUser = (user) => {
  return usersCollection.add(user);
};

export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user);
};

export const deleteUser = (id) => {
  return usersCollection.doc(id).delete();
};

export const useLoadUsers = () => {
  const users = ref([]);
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};
