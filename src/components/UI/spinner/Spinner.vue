<template>
  <div>
    <svg class="loader" viewBox="0 0 24 24">
      <circle class="loader__value" cx="12" cy="12" r="10" />
      <circle class="loader__value" cx="12" cy="12" r="10" />
      <circle class="loader__value" cx="12" cy="12" r="10" />
      <circle class="loader__value" cx="12" cy="12" r="10" />
      <circle class="loader__value" cx="12" cy="12" r="10" />
      <circle class="loader__value" cx="12" cy="12" r="10" />
    </svg>
  </div>
</template>
<script>
import "./spinner.scss";

export default {
  name: "Spinner",
};
</script>
