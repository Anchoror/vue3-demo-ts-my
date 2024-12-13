<script lang="ts" setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:show'])
</script>

<template>
  <div>
    <el-dialog v-model="props.show" title="提示" @close="emit('update:show', false)" />
  </div>
</template>

<style lang='less' scoped></style>
