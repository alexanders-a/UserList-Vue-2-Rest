import axios from "axios";

export default {
  state: () => ({
    images: [],
    isImagesLoading: false,
  }),
  getters: {},
  mutations: {
    setImages(state, images) {
      state.images = images;
    },
    setLoading(state, bool) {
      state.isImagesLoading = bool;
    },

  },
  actions: {
    async fetchImages({ commit }, albumId = 1, limit = 5) {
      try {
        commit("setLoading", true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_limit=${limit}`
        );
        commit("setImages", response.data);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  namespaced: true,
};
