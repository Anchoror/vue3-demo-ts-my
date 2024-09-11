<script setup lang="ts">
definePage({
  name: 'user',
  meta: {
    level: 2,
  },
})

const { push } = useRouter()
</script>

<template>
  <div>user</div>
  <el-button type="primary" @click="push('/detail/4')">
    next
  </el-button>
</template>

<style lang="less" scoped></style>
