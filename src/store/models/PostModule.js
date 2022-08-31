import axios from "axios";

export default {
  state: () => ({
    posts: [],
    title: "",
    body: "",
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

    updatePost: (state, { index, data }) => {
      state.posts[index].completed = data.completed;
      state.posts.save(state.posts);
    },
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
        "https://jsonplaceholder.typicode.com/posts",
        obj
      );
      commit("addPost", response.data);
    },
  },
  namespaced: true,
};
