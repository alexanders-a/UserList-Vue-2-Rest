<template>
  <div class="flex-list">
    <div @click="$router.push(`/users/${user.id}`)" class="users-list">
      <div class="flex">
        <img
          style="width: 70px"
          src="../../../../assets/avatar.svg"
          alt="image"
        />
        <p>{{ user.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },
};
</script>
