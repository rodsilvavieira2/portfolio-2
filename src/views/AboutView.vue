<script lang="ts" setup>
import SkillItemVue from "@/components/SkillItem.vue";
import { useAbilitiesStore } from "@/stores/abiliitys";
import { RouterLink } from "vue-router";

const { abilities } = useAbilitiesStore();
</script>

<template>
  <section class="about-section">
    <div class="container">
      <RouterLink class="back-button btn" to="/">
        <i class="fa-solid fa-chevron-left"></i>
      </RouterLink>

      <div class="row">
        <div class="section-title">
          <h2>Sobre mim</h2>
        </div>

        <div class="row">
          <div class="about-text">
            <p>
              Sou um dev fromtend e backend, com foco em desenvolvimento web,
              estou atualmente em busca de fazer parte de um time de
              desenvolvimento web, tenho experiência com projetos pessoais.
            </p>

            <h3>Habilidades</h3>

            <div class="skills">
              <SkillItemVue
                v-for="{ id, label, urlSite } in abilities"
                :key="id"
                :link="urlSite"
              >
                {{ label }}
              </SkillItemVue>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/base.scss";

.about-section {
  padding: 30px 0;
}

.about-img {
  width: 40%;
  padding: 0 15px;

  .img-box {
    background-color: $white-alpha-25-color;
    max-width: 380px;
    border: 1px solid $white-alpha-40-color;
    margin: auto;
    border-radius: 10px;

    img {
      width: 100%;
    }
  }
}

.about-text {
  width: 100%;
  padding: 0 15px;
  font-weight: 400;

  h3 {
    text-transform: capitalize;
    font-size: 20px;
    margin: 20px 0;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
