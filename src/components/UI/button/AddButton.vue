<template>
  <div>
    <button @click="showModal" class="button_plus"></button>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import "./addButton.scss";
export default {
  methods: {
    ...mapMutations({
      show: "post/showModal",
    }),
    showModal() {
      this.show();
    },
  },

  computed: {
    ...mapState({
      modalVisible: (state) => state.post.modalVisible,
    }),
  },
};
</script>
