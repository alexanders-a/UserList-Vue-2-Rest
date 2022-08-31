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
      hide: "post/hideEdit",
    }),
    showModal() {
      this.hide();
      this.show();
    },
  },

  computed: {
    ...mapState({
      show: "post/modalVisible",
    }),
  },
};
</script>
