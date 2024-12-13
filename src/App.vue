<script setup lang="ts">
import Header from '@/layout/header/index.vue'
import Footer from '@/layout/footer/index.vue'

// #define TEST = MODE==='test'
// #define DEV = MODE==='development'
// #define PROD = MODE==='production'

</script>

<template>
  <Header />
  <router-view />
  <Footer />
</template>

<style scoped></style>
