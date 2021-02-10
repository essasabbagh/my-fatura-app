import { createStore } from "vuex";
import router from "@/router";
import axios from "axios";
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
// const usersCollection = db.collection("users");

export default createStore({
  state: {
    error: null,
    bills: [],
    user: {},
    // userInfo: { name: "", email: "", password: "" },
  },
  mutations: {
    setBills(state, pBills) {
      state.bills = pBills;
    },
    setError(state, pError) {
      state.error = pError;
    },
    setUser(state, pUser) {
      state.user = pUser;
      localStorage.user = JSON.stringify(pUser);
    },
    logout(state) {
      state.user = null;
      localStorage.clear();
      router.push({ name: "Home" });
      // localStorage.removeItem("key")
    },
  },
  actions: {
    createUser({ commit }, info) {
      // sign up the user & add firestore data
      auth
        .createUserWithEmailAndPassword(info.email, info.password)
        .then((cred) => {
          console.log("add user sccess!", cred);
          db.collection("users").add({ uid: cred.user.uid, ...info });
          commit("setUser", { name: info.name, uid: cred.user.uid });
          commit("setError", null);
        })
        .catch((err) => {
          console.error(err.message);
          commit("setError", err.message);
        });
    },

    fetchBills({ commit }) {
      axios
        .get("http://localhost:5000/bills")
        .then((res) => {
          console.log("res", res.data);
          // this.bills = res.data;
          commit("setBills", res.data || []);
          // commit("setBills", res.data);
        })
        .catch((err) => console.error(err));
    },
  },
  getters: {
    billList: (state) => state.bills,
    errMessage: (state) => state.error,
  },
});
