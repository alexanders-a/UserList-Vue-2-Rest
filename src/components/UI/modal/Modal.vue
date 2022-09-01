<template>
  <div v-if="modalVisible">
    <div @click.stop="hideModal" class="container">
      <div @click.stop class="content">
        <div class="flex-modal">
          <h2>Создать пост</h2>
          <button @click="hideModal" class="close">✖</button>
        </div>
        <input
          type="text"
          v-bind:value="post.title"
          @input="post.title = $event.target.value"
          placeholder="Title"
          class="input"
        />
        <textarea
          v-bind:value="post.body"
          @input="post.body = $event.target.value"
          class="input"
          style="resize: vertical"
          placeholder="Body"
          type="text"
        />
        <button @click="submitted" class="button">Создать</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import "./modal.scss";

export default {
  props: {
    user: {
      type: Object,
    },
  },
  data() {
    return {
      post: {
        id: Date.now(),
        title: "",
        body: "",
        userId: Number(this.user.id),
      },
    };
  },
  methods: {
    ...mapMutations({
      hideModal: "post/hideModal",
    }),

    ...mapActions({
      createPost: "post/createPost",
    }),

    submitted() {
      this.createPost(this.post);
      console.log(this.post);
      this.post.body = "";
      this.post.title = "";
      this.hideModal();
    },
  },
  computed: {
    ...mapState({
      modalVisible: (state) => state.post.modalVisible,
      posts: (state) => state.post.posts,
    }),
  },
};
</script>
