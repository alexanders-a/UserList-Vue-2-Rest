<template>
  <div>
    <div v-if="isEdit === true" @click="hide">
      <img class="svg" src="@/assets/close.svg" alt="Edit" />
    </div>
    <div v-if="isEdit === false" @click="show">
      <img class="svg" src="@/assets/edit.svg" alt="Edit" />
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";

export default {
  props: {
    isEdit: {
      type: Boolean,
    },
  },
  methods: {
    ...mapMutations({
      show: "post/showEdit",
      hide: "post/hideEdit",
    }),
  },

  computed: {
    ...mapState({
      modalEditVisible: (state) => state.post.modalEditVisible,
    }),
  },
};
</script>
