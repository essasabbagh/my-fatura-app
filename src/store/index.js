import { createStore } from "vuex";
import router from "@/router";
import * as fire from "../utili/firebase";

export default createStore({
  state: {
    setting: {
      currency: "₺",
      color: "teal",
      limit: 0,
    },
    error: null,
    success: null,
    isAuth: false,
    bills: [],
    pages: 0,
    pageBills: [],
    categories: [],
    user: {},
    userid: null,
  },
  mutations: {
    setSetting(state, bSetting) {
      state.setting = bSetting;
      localStorage.setItem("setting", JSON.stringify(bSetting));
      this.commit("setSuccess", "Change saved Successfuly");
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
    setAuth(state, bAuth) {
      state.isAuth = bAuth;
    },
    setUserId(state) {
      if (localStorage.getItem("user")) {
        state.userid = JSON.parse(localStorage.getItem("user")).id;
        state.user = JSON.parse(localStorage.getItem("user"));
      } else {
        state.userid = null;
      }
    },
    setUser(state, pUser) {
      state.user = pUser;
      localStorage.user = JSON.stringify(pUser);
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("setting");
      router.push({ name: "Login" });
    },
  },
  actions: {
    isAuthentication({ state,commit }) {
      commit("setUserId");
      fire.Auth.onAuthStateChanged((user) => {
        if (user) {
          console.log("user logged in: ", user.email, user.uid);
          commit("setAuth", true);
          fire.Users.doc(`${state.userid}`)
            .get()
            .then((snap) => {
              console.log("from cloud", snap.data().name);
              console.log("from local", state.user.name);
            })
            .catch((err) => {
              console.error(err.message);
              commit("setError", err.message);
            });
        } else {
          console.log("user logged out");
          commit("setAuth", false);
        }
      });
    },
    login({ commit }, info) {
      fire.logIn(info.email, info.password).then(
        (cred) => {
          fire.Users.where("uid", "==", `${cred.user.uid}`)
            .get()
            .then((user) => {
              user.docs.forEach((doc) => {
                commit("setUser", { uid: doc.data().uid, id: doc.id });
              });
            });
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
              commit("setUser", {
                uid: cred.user.uid,
                id: doc.id,
                name: info.name,
              });
              commit("setError", null);
              router.push({ name: "Home" });
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
            commit("setSuccess", "Category added Successfuly");
          })
          .catch((err) => {
            console.error(err.message);
            commit("setError", err.message);
          });
      });
    },

    fetchCategory({ state, commit }) {
      if (state.userid) {
        const categories = fire.database
          .collection("users")
          .doc(`${state.userid}`)
          .collection("categories")
          .onSnapshot((snap) => {
            const catList = snap.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
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
      fire.Auth.onAuthStateChanged((user) => {
        console.log("uid", user.uid);
        fire.Users.doc(state.userid)
          .collection("bills")
          .add(bill)
          .then(() => {
            console.log(state.bills);
            commit("setBill", bill);
            commit("setSuccess", "Bill added Successfuly");
          })
          .catch((err) => {
            console.error(err.message);
            commit("setError", err.message);
          });
      });
    },
    fetchBills({ state, commit }) {
      fire.Auth.onAuthStateChanged(() => {
        fire.Users.doc(`${state.userid}`)
          .collection("bills")
          .onSnapshot((snap) => {
            const billList = snap.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            console.log("billList", billList);
            commit("setBills", billList);
          });
      });
    },

    fetchPageBills({ state, commit }, pageNum) {
      fire.Auth.onAuthStateChanged(() => {
        // if (state.filterValue === "all") {
        //   var statment = true
        // } else {
        //   // page = fire.Users.doc(`${state.userid}`)
        //   //   .collection("bills")
        //   //   .where("type", "==", state.filterValue);
        // }

        // let page = fire.Users.doc(`${state.userid}`).collection("bills");
        // let temp;
        // if (filter == "all") {
        //   temp = "phone";
        // } else {
        //   temp = filter;
        // }
        // console.log("temp",temp);
        // .where("type", "==", temp);
        // .where("type", "==", temp);
        // const page = fire.Users.doc(`${state.userid}`)
        //   .collection("bills")
        //   .where("type", "==", "phone");

        let page = fire.Users.doc(`${state.userid}`).collection("bills");
        return page
          .get()
          .then((snap) => {
            console.log(
              "length: " +
                snap.docs.length +
                " pages: " +
                Math.ceil(snap.docs.length / 7)
            );
            commit("setPages", Math.ceil(snap.docs.length / 7));
            page
              .startAfter(snap.docs[pageNum])
              .limit(7)
              .onSnapshot((snap) => {
                const billList = snap.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }));
                commit("setPageBills", billList);
              });
          })
          .catch((err) => {
            console.error(err.message);
            commit("setError", err.message);
          });
      });
    },

    deleteBill({ state, commit }, billId) {
      fire.Users.doc(`${state.userid}`)
        .collection("bills")
        .doc(billId)
        .delete()
        .catch((err) => {
          console.error(err);
          commit("setError", err.message);
        });
    },

    uploadProfileImage({ state, commit }, selectedImage) {
      fire.Auth.onAuthStateChanged(() => {
        fire.Users.doc(`${state.userid}`)
          .get()
          .then((snap) => {
            console.log("snap", snap.data().name);
            console.log("user", state.user);
          })
          .catch((err) => {
            console.error(err.message);
            commit("setError", err.message);
          });
      });
      console.log(state.user);
      const storageRef = fire.upload.ref();
      const metadata = {
        contentType: "image/jpg",
      };
      const uploadTask = storageRef
        .child("images/" + selectedImage.name)
        .put(selectedImage, metadata);
      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        // fire.upload.TaskEvent.STATE_CHANGED, // or 'state_changed'
        (snapshot) => {
          console.log(snapshot);
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          let progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          commit("setError", error.message);
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
          commit("setSuccess", "Image uploaded Successfuly");
        }
      );
    },
  },
  getters: {
    billList: (state) => state.bills,
    billPage: (state) => state.pageBills,
    getPages: (state) => state.pages,
    categoriesList: (state) => state.categories,
    errMessage: (state) => state.error,
    sucMessage: (state) => state.success,
    isAuth: (state) => state.isAuth,
    allSetting: (state) => state.setting,
  },
});
