<template>
  <div  class="wrapper-list">
    <div class="card-users" v-for="user in users" v-bind:key="user.id">
      <UsersItem :user="user" />
    </div>
  </div>
</template>

<script>
import UsersItem from "@/components/Users/list/UsersItem.vue";
import "../userStyles.scss";

export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  components: { UsersItem },
};
</script>
