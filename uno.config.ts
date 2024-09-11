// uno.config.ts
import {
  defineConfig,
  // presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from 'unocss'

import presetRemToPx from '@unocss/preset-rem-to-px'

// 刚使用unocss的朋友，可以借助这个工具： https://to-unocss.netlify.app

export default defineConfig({
  presets: [
    presetUno,
    // presetAttributify,
    presetIcons(),
    // presetMini(),
    presetRemToPx({
      baseFontSize: 8,
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Noto Sans SC',
      },
    }),
  ],
  shortcuts: [
    // shortcuts to multiple utilities
  ],
  transformers: [transformerDirectives()],
})
