<template>
  <div>
    <div v-bind:class="{ blur: modalVisible }" class="flex-posts">
      <div class="modal-button">
        <AddButton />
      </div>
      <div v-for="(post, index) in posts" v-bind:key="index">
        <div v-if="post.userId === user.id" class="blog_post">
          <div class="container_copy">
            <Edit />
            <h2>{{ post.title }}</h2>
            <p>
              {{ post.body }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <Modal />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AddButton from "../UI/button/AddButton.vue";
import Modal from "../UI/modal/Modal.vue";
import Edit from "../UI/edit/Edit.vue";
import "./postList.scss";

export default {
  methods: {
    ...mapActions({
      fetchPosts: "post/fetchPosts",
      fetchUsers: "user/fetchUsers",
    }),
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      users: (state) => state.user.users,
      modalVisible: (state) => state.post.modalVisible,
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
    console.log(this.posts.length);
  },
  components: { AddButton, Modal, Edit },
};
</script>
