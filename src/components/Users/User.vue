<template>
  <div v-if="user">
    <div class="flex container">
      <div class="profile">
        <div class="image">
          <img src="../../../assets/avatar.svg" alt="avatar" />
        </div>
        <h2>
          {{ user.name }}
        </h2>
        <div class="flex fb">
          <button
            class="button"
            @click="$router.push(`/users/${user.id}/posts`)"
          >
            Список постов
          </button>
          <button
            class="button"
            @click="$router.push(`/users/${user.id}/albums`)"
          >
            Список альбомов
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    ...mapActions({
      fetchUsers: "user/fetchUsers",
    }),
  },
  computed: {
    ...mapState({
      users: (state) => state.user.users,
    }),
  },
  mounted() {
    this.fetchUsers();
  },

  created() {
    const user = this.users.find((user) => user.id == this.$route.params.id);
    if (user) {
      this.user = user;
    }
  },
};
</script>
