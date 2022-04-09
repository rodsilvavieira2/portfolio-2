<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="bg-circles">
    <div class="circle-1" />

    <div class="circle-2" />

    <div class="circle-3" />

    <div class="circle-4" />
  </div>
  <RouterView />
</template>

<style lang="scss">
@import "@/assets/base.scss";

@keyframes bounceTop {
  0%,
  100% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(0);
  }
}

.bg-circles {
  position: fixed;
  top: 0;
  height: 100%;
  max-width: 1200px;
  width: calc(100% - 30px);
  left: 50%;
  transform: translateX(-47%);
  pointer-events: none;

  div {
    position: absolute;
    border-radius: 50%;
  }

  .circle-1 {
    height: 60px;
    width: 60px;
    background-color: $blue-color;
    left: 5%;
    top: 10%;
    opacity: 0.3;

    animation: zoomInOut 8s linear infinite;
  }

  .circle-2 {
    height: 80px;
    width: 80px;
    background-color: $main-color;
    left: 36%;
    top: 50%;
    opacity: 0.4;

    animation: bounceTop 6s ease-in-out infinite;
  }

  .circle-3 {
    height: 120px;
    width: 120px;
    background-color: $white-color;
    top: 40%;
    right: 20px;
    opacity: 0.6;
  }

  .circle-4 {
    height: 50px;
    width: 50px;
    background-color: $orange-color;
    top: 80%;
    left: 10px;
    opacity: 0.6;
  }
}
</style>
