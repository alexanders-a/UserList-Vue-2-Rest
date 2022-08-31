import axios from "axios";

export default {
  state: () => ({
    users: [],
    isUsersLoading: false,
  }),
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setLoading(state, bool) {
      state.isUsersLoading = bool;
    },
  },
  actions: {
    async fetchUsers({ state, commit }) {
      try {
        commit("setLoading", true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        commit("setUsers", response.data);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  namespaced: true,
};
