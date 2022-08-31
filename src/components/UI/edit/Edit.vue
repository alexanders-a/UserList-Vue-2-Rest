<template>
  <div @click="hide"><img src="@/assets/edit.svg" alt="Edit" /></div>
</template>
<script>
import { mapMutations, mapState } from "vuex";

export default {
  methods: {
    ...mapMutations({
      show: "post/showModal",
      // hide: "post/hideEdit"
    }),
  },

  computed: {
    ...mapState({
      show: "post/modalVisible",
    }),
  },
};
</script>
