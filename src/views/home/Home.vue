<template>
  <div class="app">
    <UsersList v-if="isUsersLoading === false" :users="users" />
    <Spinner v-if=" isUsersLoading === true"/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Spinner from "@/components/UI/spinner/Spinner.vue";
import "./home.scss";
import UsersList from "@/components/Users/list/UsersList.vue";

export default {
  name: "HomeView",
  methods: {
    ...mapActions({
      fetchUsers: "user/fetchUsers",
    }),
  },
  computed: {
    ...mapState({
      users: (state) => state.user.users,
      isUsersLoading: (state) => state.user.isUsersLoading,
    }),
  },

  mounted() {
    this.fetchUsers();
  },
  components: { UsersList, Spinner, UsersList },
};
</script>
