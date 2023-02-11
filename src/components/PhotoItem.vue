<script setup>
defineProps({
  photo: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="grid__item card">
    <router-link :to="{ params: { id: photo?.id }, name: 'PhotoPageView' }">
      <img :src="photo?.urls?.regular" :alt="photo?.description" />
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.card {
  height: 440px;
  background-color: #fff;
  overflow: hidden;
  border-radius: 8px;
  line-height: 0;
  cursor: pointer;
  margin: 0 15px 30px;
  flex: 1 1 463.33px;
}
</style>