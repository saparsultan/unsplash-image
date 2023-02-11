<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getPhotoId } from "@/services/PhotoService";
import FavoritesIcon from "./icons/IconFavorites.vue";
import IconDownload from "./icons/IconDownload.vue";

const route = useRoute();
const photo = ref("");
const full = ref("");
const newFavorites = ref(null);
let favorites = [];
const setFavorites = (el) => {
  if (el) {
    favorites.push(el);
  }
};

function addFavorites() {
  if (!newFavorites.value) {
    return;
  }
  setFavorites(newFavorites.value);
  newFavorites.value = "";
  const parsed = JSON.stringify(favorites);
  localStorage.setItem("favorites", parsed);
}

onMounted(() => {
  getPhotoId(`${route.params.id}`)
    .then((res) => {
      console.log("res", res.data);
      full.value = res.data.urls.full;
      photo.value = res.data;
      newFavorites.value = res.data;
    })
    .catch((error) => console.log("error", error));

  if (localStorage.getItem("favorites")) {
    try {
      favorites = JSON.parse(localStorage.getItem("favorites"));
    } catch (e) {
      localStorage.removeItem("favorites");
    }
  }
});
</script>

<template>
  <section class="section section-photo">
    <div class="section-photo__bg">
      <img :src="full" alt="" />
    </div>
    <div class="container">
      <div class="photo">
        <div class="photo__header">
          <div class="photo-author">
            <img
              :src="photo?.user?.profile_image?.medium"
              class="photo-author__avatar"
              :alt="photo?.alt_description"
            />
            <div class="photo-author__text">
              <span>
                {{ photo?.user?.name }}
              </span>
              <span>
                {{ `@${photo?.user?.instagram_username}` }}
              </span>
            </div>
          </div>
          <div class="photo-header__right">
            <button class="btn photo-header__favorites" @click="addFavorites()">
              <i>
                <FavoritesIcon />
              </i>
            </button>
            <a
              :href="photo?.links?.html"
              :download="photo?.links?.html"
              class="btn photo-header__download"
              target="_blank"
            >
              <i>
                <IconDownload />
              </i>
              <span> Download </span>
            </a>
          </div>
        </div>
        <div class="photo__body">
          <img :src="full" :alt="photo?.alt_description" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section-photo {
  position: relative;
  width: 100%;
  height: calc(100vh - 106px);
  padding: 40px 0;
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    filter: grayscale(100%);
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(4px);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.photo {
  display: flex;
  flex-direction: column;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__body {
    overflow: hidden;
    height: 600px;
    margin-top: 40px;
    border-radius: 8px;
    filter: drop-shadow(0px 4px 50px rgba(0, 0, 0, 0.5));
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.photo-author {
  display: flex;
  &__avatar {
    display: inline-flex;
    border: 1px solid var(--vt-c-white);
    border-radius: 8px;
    width: 55px;
    height: 55px;
    margin-right: 10px;
  }
  &__text {
    display: flex;
    flex-direction: column;
    color: var(--vt-c-white);
    span {
      line-height: 1;
      &:first-child {
        font-size: 30px;
      }
      &:last-child {
        font-size: 18px;
      }
    }
  }
}

.photo-header {
  &__right {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
  }
  &__favorites {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: var(--vt-c-white);
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: #fff200;
      transition: 0.2s ease-out;
    }
  }
  &__download {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 24px;
    padding-left: 20px;
    background-color: #fff200;
    border-radius: 8px;
    i {
      margin-right: 4px;
    }
    span {
      font-size: 20px;
    }
  }
}
</style>