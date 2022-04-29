<script lang="ts" setup>
import { ref } from "vue";

type ImageProps = {
  src?: string;
  alt?: string;
  className?: string;
};

defineProps<ImageProps>();

const isLoading = ref(true);
const isError = ref(false);

function onLoad() {
  isLoading.value = false;
}

function onError() {
  isError.value = true;
}
</script>

<template>
  <div
    id="image-loader"
    class="image-loader"
    :class="{ 'image-loader-loading': isLoading }"
  >
    <img
      v-if="!isError"
      :src="src"
      @load="onLoad"
      @error="onError"
      :alt="alt"
    />

    <div v-if="isError" class="image-loader-loading-error">
      <i class="fa-solid fa-ban"></i>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/base.scss";

.image-loader {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  > img {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: fill;

    @media (min-width: $break-p-md) {
      object-fit: cover;
    }
  }
}

.image-loader-loading {
  animation: 0.8s linear 0s infinite alternate none running skeletonLoading;

  height: 12.5rem !important;

  @media (min-width: $break-p-lg) {
    height: 16.875rem !important;
  }
}

.image-loader-loading-error {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 12.5rem !important;
  width: 100%;

  background-color: darken($main-color, 1.2);

  i {
    font-size: 2.5rem;
    color: #fff;
  }

  @media (min-width: $break-p-lg) {
    height: 16.875rem !important;
  }
}
</style>
