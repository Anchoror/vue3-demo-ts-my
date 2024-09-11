<script lang="ts" setup>
const route = useRoute()
const router = useRouter()

const activePath = computed(() => route.path)

const menuList = ref([
  {
    name: '首页',
    path: '/',
  },
  {
    name: '项目',
    path: '/project',
  },
  {
    name: '个人中心',
    path: '/user',
  },
  {
    name: '关于',
    path: '/about',
  },
])

function toPath(menu: any) {
  router.push(menu.path)
}
</script>

<template>
  <div class="flex flex-1 items-center">
    <div
      v-for="menu in menuList" :key="menu.path"
      class="min-w-52 cursor-pointer b-b-solid px-6 text-center hover:border-b-[--primary-color] hover:bg-[--text-bg-color]"
      :class="activePath === menu.path ? 'border-b-[--primary-color] bg-[--text-bg-color]' : 'border-b-transparent'"
      @click="toPath(menu)"
    >
      <div class="text-9 lh-[--header-height]">
        {{ menu.name }}
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped></style>
