<script setup lang="ts">
import Header from '@/layout/header/index.vue'
import Footer from '@/layout/footer/index.vue'
import { deployListApi } from '@/api'
import useAppStore from '@/stores/modules/app'
</script>

<template>
  <Header />
  <router-view />
  <Footer />
</template>

<style scoped></style>
