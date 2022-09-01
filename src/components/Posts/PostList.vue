<template>
  <div>
    <div v-bind:class="{ blur: modalVisible }" class="flex-posts">
      <div class="modal-button">
        <AddButton />
      </div>
      <div v-for="(post, index) in posts" v-bind:key="index">
        <div v-if="post.userId === user.id" class="blog-post">
          <div class="container-copy">
            <div class="icons">
              <img
                @click="deletePost(post.id)"
                src="@/assets/trash.svg"
                alt="trash"
                class="svg"
              />
              <Edit :isEdit="isEdit" />
            </div>
            <div v-if="isEdit === false">
              <h2>{{ post.title }}</h2>
              <p>
                {{ post.body }}
              </p>
            </div>
            <div v-else>
              <input
                type="text"
                v-bind:value="post.title"
                @input="post.title = $event.target.value"
                placeholder="Title"
                class="input is-mobile-input"
              />
              <textarea
                v-bind:value="post.body"
                @input="post.body = $event.target.value"
                class="textarea is-mobile-input"
                style="resize: vertical"
                placeholder="Body"
                type="text"
              />
            </div>

            <button
              v-show="isEdit === true"
              class="button"
              @click="update(post)"
            >
              Изменить
            </button>
          </div>
        </div>
      </div>
    </div>
    <Modal :user="user" />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import AddButton from "../UI/button/AddButton.vue";
import Modal from "../UI/modal/Modal.vue";
import Edit from "../UI/edit/Edit.vue";
import "./postList.scss";

export default {
  data() {
    return {
      post: null,
    };
  },
  methods: {
    ...mapActions({
      fetchPosts: "post/fetchPosts",
      fetchUsers: "user/fetchUsers",
      deletePost: "post/deletePost",
      updatePost: "post/updatePost",
    }),
    ...mapMutations({
      hide: "post/hideEdit",
    }),

    update(post) {
      this.updatePost(post);
      this.hide();
    },
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      users: (state) => state.user.users,
      modalVisible: (state) => state.post.modalVisible,
      isEdit: (state) => state.post.isEdit,
    }),
  },
  mounted() {
    this.fetchPosts();
    this.fetchUsers();
  },
  created() {
    const user = this.users.find(
      (user) => (user.albumId = this.$route.params.id)
    );
    if (user) {
      this.user = user;
    }
  },
  components: { AddButton, Modal, Edit },
};
</script>
