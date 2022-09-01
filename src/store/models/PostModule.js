import axios from "axios";

export default {
  state: () => ({
    posts: [],
    modalVisible: false,
    isEdit: false,
    isPostsLoading: false,
  }),
  getters: {},
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    addPost: (state, post) => state.posts.unshift(post),
    setLoading(state, bool) {
      state.isPostsLoading = bool;
    },
    showModal(state) {
      state.modalVisible = true;
    },
    hideModal(state) {
      state.modalVisible = false;
    },
    showEdit(state) {
      state.isEdit = true;
    },
    hideEdit(state) {
      state.isEdit = false;
    },

    updatePost: (state, post2) => {
      const index = state.posts.findIndex((post) => post.id == post2.id);
      if (index) {
        state.posts.splice(index, 1, post2);
      }
    },
    deletePost: (state, id) =>
      (state.posts = state.posts.filter((post) => post.id !== id)),
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        commit("setLoading", true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        commit("setPosts", response.data);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setLoading", false);
      }
    },
    async createPost({ commit }, obj) {
      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/posts?userId=${obj.userId}`,
        obj
      );
      commit("addPost", response.data);
    },
    async updatePost({ commit }, obj) {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${obj.id}`,
        obj
      );
      commit("updatePost", response.data);
    },
    async deletePost({ commit }, id) {
      commit("deletePost", id);
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    },
  },
  namespaced: true,
};
