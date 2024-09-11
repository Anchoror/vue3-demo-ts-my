<script lang="ts" setup>
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Login from './login/index.vue'
</script>

<template>
  <header class="w-full">
    <div class="mx-auto h-[--header-height] max-w-600 flex items-center gap-12">
      <Logo />
      <Menu />
      <Login />
    </div>
  </header>
</template>

<style lang='less' scoped>
</style>
