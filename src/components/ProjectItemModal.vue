<script lang="ts" setup>
import { useProjectItemModal } from "@/stores/project-item-moda";
import { useProjectsStore } from "@/stores/projects";

import { computed } from "@vue/reactivity";
import { onMounted, onUnmounted, ref } from "vue";

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
            <img :src="data?.thumbnail" alt="pp-thumbnail" />
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
                Veja Online -
                <span>
                  <a :href="data?.onlineUrl" target="_blank">{{
                    data?.onlineUrl
                  }}</a>
                </span>
              </li>

              <li>
                Github repository -
                <span>
                  <a :href="data?.githubUrl" target="_blank">{{
                    data?.githubUrl
                  }}</a>
                </span>
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
  padding: 40px 15px;

  animation: fadeIn 0.5s ease-in-out;
}

.pp-content {
  background-color: $white-alpha-25-color;
  padding: 30px;
  border-radius: 30px;
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

    height: 40px;
    width: 40px;
    padding: 0;

    position: absolute;
    right: -40px;
    top: -40px;
  }

  h3 {
    font-size: 25px;
    text-transform: capitalize;
    margin: 20px 0 15px;
  }
}

.pp-thumbnail {
  position: relative;

  border-radius: 10px;
  overflow: hidden;
  width: 838px;
  height: 471px;

  img {
    position: absolute;
    inset: 0;
    object-fit: cover;

    height: 100%;
    width: 100%;
  }
}

.pp-body {
  .description {
    margin-bottom: 20px;
  }

  .general-info {
    li {
      margin-bottom: 10px;
      font-weight: 500;
      text-transform: capitalize;

      span {
        font-weight: 300;
      }

      a {
        text-transform: lowercase;
        color: $main-color;
      }
    }
  }
}
</style>
