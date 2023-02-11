<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import SearchIcon from "./icons/IconSearch.vue";

const store = useStore();
const search = ref("");

function searchPhotos(per_page, value) {
  store.dispatch("searchPhoto/fetch", { per_page, value });
}
</script>

<template>
  <section class="section section-search">
    <div class="container">
      <div class="search">
        <div class="search__input">
          <input type="text" v-model="search" placeholder="Поиск" />
          <div></div>
          <button class="search__btn" @click="searchPhotos(9, `${search}`)">
            <i>
              <SearchIcon />
            </i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-search {
  background-image: url("@/assets/bg-search.jpg");
}

.search {
  display: flex;
  align-items: center;
  justify-content: center;

  &__input {
    position: relative;
    margin: 0 auto;
    padding: 92px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 866px;
    width: 100%;
    input {
      width: 100%;
      font-size: 24px;
      font-weight: 300;
      padding: 20px 32px;
      border: none;
      outline: none;
    }
  }
  &__btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 17px 32px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
}
</style>
