<script lang="ts" setup>
import { RouterLink } from "vue-router";

defineProps({
  link: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <a :href="link" target="_blank" class="skill-item btn">
    <slot />
  </a>
</template>

<style lang="scss">
@import "@/assets/base.scss";

.skill-item {
  background-color: $white-alpha-25-color;
  border: 3px solid $white-alpha-40-color;
  padding: 5px 15px;
  text-transform: capitalize;
  margin: 0 10px 10px 0;
  border-radius: 20px;
  font-weight: 500;
  color: inherit;
}
</style>
