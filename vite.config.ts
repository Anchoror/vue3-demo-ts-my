import path from 'node:path'
import process from 'node:process'
import { type ConfigEnv, type UserConfig, loadEnv } from 'vite'
import { createVitePlugins } from './build/vite'
import { exclude, include } from './build/vite/optimize'

export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  return {
    base: env.VITE_APP_PUBLIC_PATH,
    plugins: createVitePlugins(), // 调用自定义函数创建 Vite 插件配置

    resolve: {
      alias: {
        '~@': path.join(__dirname, './src'),
        '@': path.join(__dirname, './src'),
        '~': path.join(__dirname, './src/assets'),
      },

    },

    css: {
      postcss: {
        plugins: [],
      },
    },

    server: {
      host: true,
      port: 3000,
      proxy: {
        '/api': {
          target: env.VITE_APP_API_TARGET_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
      hmr: {
        overlay: false,
      },
    },

    build: {
      cssCodeSplit: false,
      chunkSizeWarningLimit: 2048,
      outDir: mode === 'development' ? 'dist/dev' : 'dist/prod',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },

    optimizeDeps: { include, exclude },
  }
}
