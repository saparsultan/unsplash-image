<template>
  <section class="section section-grid">
    <div class="container">
      <div
        class="loader"
        v-if="
          photo.loadState === partials.LOAD_STATE.LOADING
        "
      ></div>

      <div
        class="grid"
        v-if="
          searchPhoto.photos.length <= 0 &&
          photo.loadState === partials.LOAD_STATE.SUCCESS
        "
      >
        <PhotoItem
          v-for="photo in photo.photos"
          :key="photo.id"
          :photo="photo"
        />
      </div>

      <div
        class="grid"
        v-if="
          searchPhoto.photos.length > 0 &&
          searchPhoto.loadState === partials.LOAD_STATE.SUCCESS
        "
      >
        <PhotoItem
          v-for="photo in searchPhoto.photos"
          :key="photo.id"
          :photo="photo"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import partials from "@/store/partials";
import PhotoItem from "./PhotoItem.vue";

const store = useStore();

function fetchPhotos(count) {
  store.dispatch("photo/fetch", count);
}

const photo = computed(() => store.state.photo);
const searchPhoto = computed(() => store.state.searchPhoto);
const searchValue = computed(() => store.state.searchValue);

onMounted(() => {
  fetchPhotos(9);
});
</script>

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

