<template>
  <div class="flex-albums">
    <div v-for="album in albums" v-bind:key="album.id">
      <div
        @click="$router.push(`/users/${user.id}/albums/${album.id}`)"
        class="wrapper-albums flex"
        v-if="album.userId === user.id"
      >
        <div>
          <h2>{{ album.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import "./albumsList.scss";

export default {
  methods: {
    ...mapActions({
      fetchAlbums: "album/fetchAlbums",
      fetchUsers: "user/fetchUsers",
    }),
  },
  computed: {
    ...mapState({
      albums: (state) => state.album.albums,
      users: (state) => state.user.users,
    }),
  },
  mounted() {
    this.fetchAlbums();
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
};
</script>
