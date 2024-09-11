<script lang="ts" setup>
const router = useRouter()
function toLogin() {
  router.push({ path: '/login' })
}
</script>

<template>
  <div class="">
    <el-button link class="text-8" @click="toLogin">
      登录 / 注册
    </el-button>
  </div>
</template>

<style lang='less' scoped></style>
