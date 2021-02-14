import { createStore } from "vuex";
import router from "@/router";
import * as fire from "../utili/firebase";

export default createStore({
  state: {
    setting: {
      currency: "₺",
      color: "",
      limit: 0
    },
    error: null,
    success: null,
    isAuth: false,
    bills: [],
    pages: 0,
    pageBills: [],
    categories: [],
    user: {},
    userid: null
  },
  mutations: {
    setSetting(state, bSetting) {
      state.setting = bSetting;
      localStorage.setItem("setting", JSON.stringify(bSetting));
      this.commit("setSuccess", "Change saved Successfuly");
    },
    setAuth(state, bAuth) {
      state.isAuth = bAuth;
    },
    setUserId(state) {
      if (localStorage.getItem("user")) {
        state.userid = JSON.parse(localStorage.getItem("user")).id;
      } else {
        state.userid = null;
      }
    },
    setBill(state, pBills) {
      state.bills.push(pBills);
    },
    setBills(state, pBills) {
      state.bills = pBills;
    },
    setPageBills(state, pBills) {
      state.pageBills = pBills;
    },
    setPages(state, nPages) {
      state.pages = nPages;
    },
    setCategory(state, pCategory) {
      state.categories.push(pCategory);
    },
    setCategories(state, pCategories) {
      state.categories = pCategories;
    },
    setError(state, pError) {
      state.error = pError;
      state.success = null;
    },
    setSuccess(state, pSuccess) {
      state.success = pSuccess;
      state.error = null;
    },
    setUser(state, pUser) {
      state.user = pUser;
      localStorage.user = JSON.stringify(pUser);
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("user");
      router.push({ name: "Login" });
    }
  },
  actions: {
    isAuthentication({ commit }) {
      fire.Auth.onAuthStateChanged(user => {
        if (user) {
          console.log("user logged in: ", user.email, user.uid);
          commit("setAuth", true);
        } else {
          console.log("user logged out");
          commit("setAuth", false);
        }
      });
    },
    login({ commit }, info) {
      fire.logIn(info.email, info.password).then(
        cred => {
          console.log("cred", cred.user.uid);
          fire.Users.where("uid", "==", `${cred.user.uid}`)
            .get()
            .then(user => {
              user.docs.forEach(doc => {
                commit("setUser", { uid: doc.data().uid, id: doc.id });
                console.log(doc.id);
              });
            });
          // commit("setUser", { uid: cred.user.uid });
          commit("setError", null);
          router.push({ name: "Home" });
        },
        err => {
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
        .catch(err => {
          console.error(err.message);
          commit("setError", err.message);
        });
    },

    createUser({ commit }, info) {
      fire
        .signIn(info.email, info.password)
        .then(cred => {
          console.log("add user sccess!", cred);
          const today = new Date();
          fire
            .saveUser({ uid: cred.user.uid, createdAt: today, ...info })
            .then(doc => {
              console.log(doc.id);
              commit("setUser", { uid: cred.user.uid, id: doc.id });
              commit("setError", null);
            });
        })
        .catch(err => {
          console.error(err.message);
          commit("setError", err.message);
        });
    },

    createCategory({ state, commit }, cat) {
      commit("setUserId");
      fire.Auth.onAuthStateChanged(user => {
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
            commit("setSuccess", "Category added Successfuly");
          })
          .catch(err => {
            console.error("my", err.message);
            commit("setError", err.message);
          });
      });
    },

    fetchCategory({ state, commit }) {
      commit("setUserId");
      if (state.userid) {
        const categories = fire.database
          .collection("users")
          .doc(`${state.userid}`)
          .collection("categories")
          .onSnapshot(snap => {
            const catList = snap.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            console.log("catList", catList);
            commit("setCategories", catList);
          });
        console.log(categories);
      } else {
        console.log("no id");
      }
    },

    createBill({ state, commit }, bill) {
      fire.Auth.onAuthStateChanged(user => {
        console.log("uid", user.uid);
        fire.Users.doc(state.userid)
          .collection("bills")
          .add(bill)
          .then(() => {
            console.log(state.bills);
            commit("setBill", bill);
            commit("setSuccess", "Bill added Successfuly");
          })
          .catch(err => {
            console.error("my", err.message);
            commit("setError", err.message);
          });
      });
    },
    fetchBills({ state, commit }) {
      commit("setUserId");
      fire.Auth.onAuthStateChanged(() => {
        fire.Users.doc(`${state.userid}`)
          .collection("bills")
          .onSnapshot(snap => {
            const billList = snap.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            console.log("billList", billList);
            commit("setBills", billList);
          });
      });
    },

    fetchPageBills({ state, commit }, pageNum) {
      commit("setUserId");
      fire.Auth.onAuthStateChanged(() => {
        const page = fire.Users.doc(`${state.userid}`).collection("bills");
        // .limit(7);
        return page.get().then(snap => {
          // var lastVisible = snap.docs[snap.docs.length - 1];
          // console.log("last", lastVisible);
          console.log("length", snap.docs.length);
          console.log("pages", snap.docs.length % 6);
          commit("setPages", snap.docs.length % 6);
          var next = fire.Users.doc(`${state.userid}`)
            .collection("bills")
            .startAfter(snap.docs[pageNum])
            .limit(7)
            .onSnapshot(snap => {
              console.log("snap", snap.docs.length);
              const billList = snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
              }));
              console.log("billList", billList);
              commit("setPageBills", billList);
            });
          console.log(next);
        });
      });
    },

    deleteBill({ state, commit }, billId) {
      commit("setUserId");
      fire.Users.doc(`${state.userid}`)
        .collection("bills")
        .doc(billId)
        .delete()
        .catch(err => {
          console.error(err);
          commit("setError", err.message);
        });
    }
  },
  getters: {
    billList: state => state.bills,
    billPage: state => state.pageBills,
    getPages: state => state.pages,
    categoriesList: state => state.categories,
    errMessage: state => state.error,
    sucMessage: state => state.success,
    isAuth: state => state.isAuth,
    allSetting: state => state.setting
  }
});
