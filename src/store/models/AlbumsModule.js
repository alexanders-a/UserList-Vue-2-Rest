import axios from "axios";

export default {
  state: () => ({
    albums: [],
    isAlbumsLoading: false,
    albumsId: [],
  }),
  getters: {},
  mutations: {
    setAlbums(state, albums) {
      state.albums = albums;
    },
    setLoading(state, bool) {
      state.isAlbumsLoading = bool;
    },
  },
  actions: {
    async fetchAlbums({ commit }) {
      try {
        commit("setLoading", true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/albums"
        );
        commit("setAlbums", response.data);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  namespaced: true,
};
