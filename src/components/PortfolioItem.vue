<script lang="ts" setup>
import { useProjectItemModal } from "@/stores/project-item-moda";
import Image from "./Image.vue";

type Props = {
  id: string;
  projectName: string;
  thumbnail: string;
};

defineProps<Props>();

const { $patch } = useProjectItemModal();

function openProjectItemModal(id: string) {
  $patch({ isOpen: true, projectItemId: id });
}
</script>

<template>
  <button class="portfolio-item" @click="openProjectItemModal(id)">
    <div class="portfolio-item-thumbnail">
      <Image :src="thumbnail" :alt="projectName" />

      <div class="portfolio-item-thumbnail-overlay">
        <p>clique para ver mais detalhes</p>
      </div>
    </div>

    <h3 class="portfolio-item-title">{{ projectName }}</h3>
  </button>
</template>

<style lang="scss">
@import "@/assets/base.scss";

.portfolio-item {
  margin: 0 0.9375rem 1.875rem;
  border: 0;
  appearance: none;
  background-color: transparent;

  &-title {
    text-align: center;
    font-weight: 600;
    font-size: 1.125rem;
    text-transform: capitalize;
    margin: 1.25rem 0;
  }

  &:focus {
    .portfolio-item-thumbnail {
      &::before {
        transform: scaleY(1);
      }
    }
  }
}

.portfolio-item-thumbnail {
  position: relative;

  padding: 10px;
  background-color: $white-alpha-25-color;
  border: 1px solid 0;
  border-radius: 10px;
  overflow: hidden;

  height: 30vh;

  @media (min-width: $break-p-md) {
    height: 40vh;
  }

  &:hover {
    .portfolio-item-thumbnail-overlay {
      opacity: 1;
    }
  }

  &-overlay {
    position: absolute;
    inset: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;

    transition: opacity 0.3s ease-in-out;

    p {
      color: $white-color;
      font-size: 1rem;
      font-weight: 600;
    }
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(#ff0055, 0.7);
    z-index: -1;
    transform: scaleY(0);
    transition: all 0.3s ease-in-out;
    transform-origin: bottom;
    border-radius: 10px;
  }

  &:hover {
    &::before {
      transform: scaleY(1);
    }
  }
}
</style>
