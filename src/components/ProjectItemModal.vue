<script lang="ts" setup>
import { useProjectItemModal } from "@/stores/project-item-moda";
import { useProjectsStore } from "@/stores/projects";

import { computed } from "@vue/reactivity";
import { onMounted, onUnmounted, ref } from "vue";
import ImageVue from "./Image.vue";
import Image from "./Image.vue";

const { projects } = useProjectsStore();
const { $patch, projectItemId } = useProjectItemModal();

const modalRef = ref<HTMLDivElement | null>(null);

function closeModal() {
  $patch({ isOpen: false, projectItemId: "" });
}

const data = computed(() =>
  projects.find((project) => project.id === projectItemId)
);

const onPressEsc = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    closeModal();
  }
};

onMounted(() => {
  window.document.addEventListener("keydown", onPressEsc, false);

  modalRef.value?.focus();
});

onUnmounted(() => {
  window.document.removeEventListener("keydown", onPressEsc, false);

  $patch({ isOpen: false, projectItemId: "" });
});
</script>

<template>
  <div class="portfolio-popup">
    <div class="pp-inner">
      <div
        class="pp-content"
        aria-describedby="modalDescription"
        aria-labelledby="modalTitle"
        aria-modal="true"
        tabindex="-1"
        ref="modalRef"
      >
        <div class="pp-header">
          <button
            @click="closeModal()"
            type="button"
            aria-label="fechar modal"
            class="btn pp-close"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>

          <div class="pp-thumbnail">
            <Image :src="data?.thumbnail" :alt="data?.projectName" />
          </div>

          <h3 id="modalTitle">{{ data?.projectName }}</h3>
        </div>

        <div class="pp-body">
          <div class="description" id="modalDescription">
            <p>
              {{ data?.description }}
            </p>
          </div>

          <div class="general-info">
            <ul>
              <li>
                Tecnologias usadas -
                <span>{{ data?.technologies.join(",  ") }}</span>
              </li>

              <li>
                Role - <span>{{ data?.role }}</span>
              </li>

              <li>
                <a :href="data?.onlineUrl" target="_blank"> Veja Online </a>
              </li>

              <li>
                <a :href="data?.githubUrl" target="_blank">Github repository</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/base.scss";

.portfolio-popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  overflow-y: auto;
}

.pp-inner {
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  padding: 1rem;

  animation: fadeIn 0.5s ease-in-out;
}

.pp-content {
  background-color: $white-alpha-25-color;
  padding: 1.875rem;
  border-radius: 1.875rem;
  max-width: 900px;
  width: 100%;
  border: 1px solid $white-alpha-40-color;
  backdrop-filter: $backdrop-filter-blur;
}

.pp-header {
  position: relative;

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2.5rem;
    width: 2.5rem;
    padding: 0;

    position: absolute;
    right: -40px;
    top: -40px;
  }

  h3 {
    font-size: 1.5625rem;
    text-transform: capitalize;
    margin: 1.25rem 0 0.9375rem;
  }
}

.pp-thumbnail {
  position: relative;

  border-radius: 0.7rem;
  overflow: hidden;
  width: 100%;
  height: auto;
}

.pp-body {
  .description {
    margin-bottom: 1.25rem;
  }

  .general-info {
    li {
      margin-bottom: 0.625rem;
      font-weight: 500;
      text-transform: capitalize;

      span {
        font-weight: 300;
      }

      a {
        text-transform: capitalize;
        color: $main-color;
      }
    }
  }
}
</style>
