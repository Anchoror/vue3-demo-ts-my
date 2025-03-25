export default function useListLoad(
  api: (page: number, limit: number) => Promise<any>,
) {
  const page = ref(1)
  const pageSize = ref(10)
  const list = ref([])
  const total = ref(0)
  const loading = ref(false)
  const finished = ref(false)
  const refreshing = ref(false)
  // const others = ref<any>({})

  const onLoad = async () => {
    if (refreshing.value) {
      list.value = []
      refreshing.value = false
    }
    const { total: _total, list: _list } = await api(page.value, pageSize.value)
    total.value = _total
    list.value = list.value.concat(_list)
    loading.value = false
    finished.value = list.value.length >= total.value
    page.value++

    // others.value = { ...data, list: undefined, total: undefined }
  }

  const onRefresh = async () => {
    finished.value = false
    loading.value = true
    onLoad()
  }

  return {
    onLoad,
    loading,
    finished,
    list,
    total,
    page,
    pageSize,
    refreshing,
    onRefresh,
    // others,
  }
}
