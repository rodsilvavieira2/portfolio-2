<script setup lang="ts">
import ProjectItemModalVue from "@/components/ProjectItemModal.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="home-section align-items-center">
    <div class="container">
      <div class="row align-items-center flex-wrap">
        <div class="home-text">
          <p>Olá, eu sou</p>

          <h1>Rodrigo Silva</h1>

          <h2>frontend web developer</h2>
          <RouterLink to="/about" class="btn">mais sobre min</RouterLink>

          <RouterLink to="/portfolio" class="btn">portifolio</RouterLink>

          <RouterLink to="/contact" class="btn">Contacte-me</RouterLink>
        </div>

        <div class="home-img">
          <div class="img-box">
            <img src="/man.png" alt="Rodrigo Silva" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/base.scss";

.home-text {
  p {
    font-size: 18px;
    font-weight: 400;
  }

  h1 {
    font-size: 50px;
  }

  h2 {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 400;
    margin: 0 0 30px;
  }

  .btn {
    margin: 0 15px 15px 0;
  }
}

.home-section {
  display: flex;
}

.home-img {
  .img-box {
    max-width: 360px;
    background-color: $white-alpha-25-color;
    border-radius: 50%;
    border: 8px solid $white-alpha-25-color;
    margin: auto;

    overflow: hidden;

    img {
      height: auto;
      width: 100%;
    }
  }
}

.home-text,
.home-img {
  width: 100%;
  padding: 15px;

  @media (min-width: $break-p-md) {
    width: 50%;
  }
}

.flex-wrap {
  flex-wrap: wrap-reverse !important;
}
</style>
