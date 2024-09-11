import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from '@/App.vue'
import router from '@/router'
import pinia from '@/stores'

// 样式文件
import '@unocss/reset/normalize.css'
import 'virtual:uno.css'
import '@/styles/app.less'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)
app.use(pinia)

app.mount('#app')
