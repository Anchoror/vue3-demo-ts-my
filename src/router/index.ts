import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import NProgress from 'nprogress'
import useAppStore from '@/stores/modules/app'

import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_PUBLIC_PATH),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

router.beforeEach((to, _from, next) => {
  const { token } = storeToRefs(useAppStore())

  if (!token.value && to.name !== 'login') {
    next(`/login`)
    return
  }
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
