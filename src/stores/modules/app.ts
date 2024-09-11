import { defineStore } from 'pinia'

import type { deployListType } from '@/api/types'

const useAppStore = defineStore(
  'app',
  () => {
    const token = ref<string>('123')

    const deploy = ref<deployListType>({
      adornType: 1,
      headPortrait: '',
      logoIcon: '',
      themeColor: '#D71317',
    })

    return {
      token,
      deploy,
    }
  },
  {
    persist: true, // 开启持久化
  },
)

export default useAppStore
