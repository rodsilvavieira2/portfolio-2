<script lang="ts" setup>
import PortfolioItemVue from "@/components/PortfolioItem.vue";
import ProjectItemModal from "@/components/ProjectItemModal.vue";

import { useProjectsStore } from "@/stores/projects";
import { useProjectItemModal } from "@/stores/project-item-moda";

import { storeToRefs } from "pinia";
import { ref } from "vue-demi";
import { onMounted } from "vue";

const toTopButtonWrapperRef = ref<HTMLDivElement | null>(null);

const { projects } = useProjectsStore();
const { isOpen } = storeToRefs(useProjectItemModal());

const app = document.getElementById("app");

function scrollToTop() {
  if (app) {
    app.scrollTo({ top: 0, behavior: "smooth" });
  }
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("visible");
        toTopButtonWrapperRef.value?.classList.add("show");
      } else {
        toTopButtonWrapperRef.value?.classList.remove("show");
      }
    });
  });

  observer.observe(toTopButtonWrapperRef.value as Element);
});
</script>

<template>
  <ProjectItemModal v-if="isOpen" />

  <section class="portfolio-section sec-padding" v-if="!isOpen">
    <RouterLink class="back-button btn" to="/">
      <i class="fa-solid fa-chevron-left"></i>
    </RouterLink>

    <div class="container">
      <div class="row">
        <div class="section-title">
          <h2>Trabalhos recentes</h2>
        </div>
      </div>

      <div class="row portfolio-container">
        <PortfolioItemVue
          v-for="{ projectName, thumbnail, id } in projects"
          :key="id"
          :project-name="projectName"
          :thumbnail="thumbnail"
          :id="id"
        />
      </div>
    </div>
  </section>

  <div
    v-if="!isOpen"
    class="scroll-top-button-wrapper"
    ref="toTopButtonWrapperRef"
  >
    <button class="scroll-top-button btn" @click="scrollToTop()">
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  </div>
</template>

<style lang="scss">
@import "@/assets/base.scss";

.portfolio-container {
  > * {
    flex: 1 1 100%;
    @media (min-width: $break-p-md) {
      flex-basis: 33.33%;
    }
  }
}

.scroll-top-button-wrapper {
  display: flex;
  padding: 1.25rem 0;
  justify-content: flex-end;

  transform: translateY(60px);
  opacity: 0;

  transition: all 0.3s ease;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.5rem;
    height: 2.5rem;

    border-radius: 2.5rem;

    padding: 0;
  }
}

.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
