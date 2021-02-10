import { createStore } from "vuex";
import router from "@/router";
// import axios from "axios";
import * as fire from "../utili/firebase";

export default createStore({
  state: {
    error: null,
    bills: [],
    categories: [],
    user: {},
    userid: JSON.parse(localStorage.getItem("user")).id,
  },
  mutations: {
    setBills(state, pBills) {
      state.bills = pBills;
    },
    setCategory(state, pCategory) {
      state.categories.push(pCategory);
    },
    setCategories(state, pCategories) {
      state.categories = pCategories;
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
      localStorage.removeItem("user");
      router.push({ name: "Login" });
    },
  },
  actions: {
    login({ commit }, info) {
      fire.logIn(info.email, info.password).then(
        (cred) => {
          console.log(cred);
          commit("setUser", { uid: cred.user.uid });
          commit("setError", null);
          router.push({ name: "Home" });
        },
        (err) => {
          console.error(err);
          commit("setError", err.message);
        }
      );
    },

    logout({ commit }) {
      fire
        .logOut()
        .then(() => {
          commit("logout");
        })
        .catch((err) => {
          console.error(err.message);
          commit("setError", err.message);
        });
    },

    createUser({ commit }, info) {
      fire
        .signIn(info.email, info.password)
        .then((cred) => {
          console.log("add user sccess!", cred);
          const today = new Date();
          fire
            .saveUser({ uid: cred.user.uid, createdAt: today, ...info })
            .then((doc) => {
              console.log(doc.id);
              commit("setUser", { uid: cred.user.uid, id: doc.id });
              commit("setError", null);
            });
        })
        .catch((err) => {
          console.error(err.message);
          commit("setError", err.message);
        });
    },

    createCategory({ state, commit }, cat) {
      fire.Auth.onAuthStateChanged((user) => {
        console.log("uid", user.uid);
        console.log("cat", cat);
        fire.database
          .collection("users")
          .doc(state.userid)
          .collection("categories")
          .add(cat)
          .then(() => {
            console.log(state.categories);
            commit("setCategory", cat);
          })
          .catch((err) => {
            console.error("my", err.message);
            commit("setError", err.message);
          });
      });
    },

    fetchCategory({ state, commit }) {
      const categories = fire.database
        .collection("users")
        .doc(`${state.userid}`)
        .collection("categories")
        .onSnapshot((snap) => {
          const catList = snap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          console.log("catList", catList);
          commit("setCategories", catList);
        });
      console.log(categories);
    },

    fetchBills({ commit }) {
      // axios
      //   .get("http://localhost:5000/bills")
      //   .then((res) => {
      //     console.log("res", res.data);
      //     // this.bills = res.data;
      commit("setBills", []);
      //     // commit("setBills", res.data);
      //   })
      //   .catch((err) => console.error(err));
    },
  },
  getters: {
    billList: (state) => state.bills,
    categoriesList: (state) => state.categories,
    errMessage: (state) => state.error,
  },
});
