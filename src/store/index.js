import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    bills: [],
  },
  mutations: {
    setBills(state, pBills) {
      state.bills = pBills;
    },
  },
  actions: {
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
  },
});
