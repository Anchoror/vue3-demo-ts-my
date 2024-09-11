import type { deployListType } from './types'
import { post } from '@/utils/request'

export function deployListApi() {
  return post<deployListType>({
    url: 'home/deployList',
  })
}
    