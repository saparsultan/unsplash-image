<script setup>
import { ref, onMounted } from "vue";
import PhotoItem from "./PhotoItem.vue";

let itemRefs = ref("");

onMounted(() => {
  itemRefs.value = JSON.parse(localStorage.getItem("favorites"));
});
</script>

<template>
  <section class="section section-grid">
    <div class="container">
      <h2>Избранное</h2>

      <div class="grid">
        <PhotoItem v-for="photo in itemRefs" :key="photo.id" :photo="photo" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section-grid {
  padding-top: 100px;
}
.grid {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
  &__item {
    margin: 0 15px 15px;
    flex: 1 1 463.33px;

    a {
      display: inline-flex;
      width: 100%;
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
