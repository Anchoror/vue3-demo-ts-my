<script setup lang="ts">
definePage({
  name: 'index',
  meta: {
    level: 1,
  },
})
useHead({
  title: 'Hello World',
})
</script>

<template>
  <div class="page">
    <!-- #if DEV -->
    DEV
    <!-- #endif -->

    <!-- #if PROD -->
    PROD
    <!-- #endif -->

    <!-- #if TEST -->
    TEST
    <!-- #endif -->
  </div>
</template>

<style lang="less" scoped>
.page {
  color: red;
  .h1 {
    font-size: 22px;
  }
}
</style>
